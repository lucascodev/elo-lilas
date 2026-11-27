// Delivered as a meta tag because GitHub Pages cannot send custom headers; frame-ancestors only works as a header.
const isDevelopment = process.env.NODE_ENV === "development";

const SCRIPT_SOURCES = isDevelopment ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self' 'unsafe-inline'";

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src ${SCRIPT_SOURCES}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");
