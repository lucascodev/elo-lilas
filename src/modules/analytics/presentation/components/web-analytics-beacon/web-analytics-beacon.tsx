import Script from "next/script";

type WebAnalyticsBeaconProps = {
  token: string;
  beaconScriptUrl: string;
};

export function WebAnalyticsBeacon({ token, beaconScriptUrl }: WebAnalyticsBeaconProps) {
  return <Script type="module" src={beaconScriptUrl} data-cf-beacon={JSON.stringify({ token })} strategy="afterInteractive" />;
}
