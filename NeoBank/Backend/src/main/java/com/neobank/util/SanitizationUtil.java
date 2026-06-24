package com.neobank.util;

public class SanitizationUtil {

	private SanitizationUtil() {
	}

	public static String sanitizeErrorMessage(String message) {
		if (message == null) {
			return null;
		}

		String sanitized = message;

		sanitized = sanitized.replaceAll("(?i)password\\s*[:=]\\s*[^,\\s]+", "password=***");
		sanitized = sanitized.replaceAll("(?i)bearer\\s+[a-zA-Z0-9._-]+", "Bearer ***");
		sanitized = sanitized.replaceAll("(?i)jwt\\s*[:=]\\s*[^,\\s]+", "jwt=***");

		if (sanitized.length() > 1000) {
			sanitized = sanitized.substring(0, 1000);
		}

		return sanitized;
	}
}
