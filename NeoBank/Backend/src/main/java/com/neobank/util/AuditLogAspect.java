package com.neobank.util;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.neobank.entity.SystemAuditLog;
import com.neobank.service.SystemAuditLogService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;

@Aspect
@Component
@AllArgsConstructor
public class AuditLogAspect {

    private final SystemAuditLogService systemAuditLogService;

    @Around("execution(* com.neobank.controller..*(..))")
    public Object logApiExecution(ProceedingJoinPoint joinPoint) throws Throwable {

        long startTime = System.currentTimeMillis();

        HttpServletRequest request = getCurrentRequest();

        String endpoint = request != null ? request.getRequestURI() : "UNKNOWN";
        String method = request != null ? request.getMethod() : "UNKNOWN";

        Integer status = 200;
        String errorMessage = null;

        try {
            Object result = joinPoint.proceed();

            if (result instanceof ResponseEntity<?> responseEntity) {
                status = responseEntity.getStatusCode().value();
            }

            return result;

        } catch (Exception ex) {
            status = 500;
            errorMessage = SanitizationUtil.sanitizeErrorMessage(ex.getMessage());
            throw ex;

        } finally {
            long executionTime = System.currentTimeMillis() - startTime;

            SystemAuditLog log = new SystemAuditLog();

            log.setEndpoint(endpoint);
            log.setHttpMethod(method);
            log.setResponseStatus(status);
            log.setExecutionTimeMs(executionTime);
            log.setActingUserId(getCurrentUserId());
            log.setErrorMessage(errorMessage);

            systemAuditLogService.saveLog(log);
        }
    }

    private HttpServletRequest getCurrentRequest() {
        ServletRequestAttributes attributes =
                (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

        if (attributes == null) {
            return null;
        }

        return attributes.getRequest();
    }

    private Long getCurrentUserId() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }

        Object principal = authentication.getPrincipal();

        /*
         * If your principal is only email/username string,
         * we cannot get userId directly here.
         */
        if (principal instanceof String) {
            return null;
        }

        /*
         * If you have custom UserPrincipal class with getId(),
         * uncomment and use this:
         *
         * if (principal instanceof UserPrincipal userPrincipal) {
         *     return userPrincipal.getId();
         * }
         */

        return null;
    }
}