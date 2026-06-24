package com.neobank.exception;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.neobank.dto.ApiResponseDTO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NeoBankException.class)
	public ResponseEntity<ApiResponseDTO<Void>> handleNeoBankException(NeoBankException ex) {
		ApiResponseDTO<Void> response = ApiResponseDTO.<Void>error(ex.getHttpStatus().value(), ex.getMessage(),
				ex.getErrorCode());
		log.error(ex.toString());
		return new ResponseEntity<>(response, ex.getHttpStatus());
	}

//	@ExceptionHandler(Exception.class)
//	public ResponseEntity<ApiResponseDTO<Void>> handleGenericException(Exception ex) {
//		ApiResponseDTO<Void> response = ApiResponseDTO.<Void>error(HttpStatus.INTERNAL_SERVER_ERROR.value(),
//				"Internal server error", "INTERNAL_ERROR");
//		log.error(ex.toString());
//		return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<Map<String, Object>> handleBadRequest(IllegalArgumentException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("timestamp", LocalDateTime.now(), "status",
				400, "error", "Bad Request", "message", ex.getMessage()));
	}

	@ExceptionHandler(SecurityException.class)
	public ResponseEntity<Map<String, Object>> handleForbidden(SecurityException ex) {
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("timestamp", LocalDateTime.now(), "status", 403,
				"error", "Forbidden", "message", ex.getMessage()));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String, Object>> handleGeneric(Exception ex) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(Map.of("timestamp", LocalDateTime.now(), "status", 500, "error", "Internal Server Error",
						"message", "Something went wrong. Please try again later."));
	}

}