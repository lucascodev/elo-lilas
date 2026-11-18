import type { Clock } from "@/shared/application/clock/clock.interface";

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }
}
