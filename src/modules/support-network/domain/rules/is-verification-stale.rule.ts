import { VERIFICATION_POLICY } from "../constants/verification-policy.constant";

export function isVerificationStale(lastVerifiedAt: Date, now: Date, maxAgeInMonths: number = VERIFICATION_POLICY.maxAgeInMonths): boolean {
  const limit = new Date(now);
  limit.setMonth(limit.getMonth() - maxAgeInMonths);
  return lastVerifiedAt.getTime() < limit.getTime();
}
