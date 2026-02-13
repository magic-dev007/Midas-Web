const CONSENT_COOKIE_NAME = "midas_cookie_consent";
const CONSENT_MAX_AGE_DAYS = 365;

export type ConsentStatus = "accepted" | "declined" | null;

export function getConsent(): ConsentStatus {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + CONSENT_COOKIE_NAME + "=([^;]*)")
  );
  const value = match ? decodeURIComponent(match[1]) : null;
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setConsent(status: "accepted" | "declined"): void {
  if (typeof document === "undefined") return;
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE_NAME}=${status}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearConsent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE_NAME}=; path=/; max-age=0`;
}
