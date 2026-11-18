type LogoProps = {
  tone?: "light" | "dark";
  size?: number;
};

export function Logo({ tone = "light", size = 34 }: LogoProps) {
  const mainStroke = tone === "light" ? "#5B2E91" : "#D9CCEB";

  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="9" width="18" height="16" rx="8" stroke={mainStroke} strokeWidth="3" />
      <rect x="13" y="9" width="18" height="16" rx="8" stroke="#A47BD6" strokeWidth="3" />
    </svg>
  );
}
