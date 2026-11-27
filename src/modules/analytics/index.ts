export type { ClickTrackingConfigDto } from "./application/dtos/click-tracking-config.dto";
export type { WebAnalyticsConfigDto } from "./application/dtos/web-analytics-config.dto";
export { makeClickTrackingConfig } from "./main/factories/make-click-tracking-config.factory";
export { makeWebAnalyticsConfig } from "./main/factories/make-web-analytics-config.factory";
export { ClickEventTracker } from "./presentation/components/click-event-tracker/click-event-tracker";
export { WebAnalyticsBeacon } from "./presentation/components/web-analytics-beacon/web-analytics-beacon";
