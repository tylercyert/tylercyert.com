type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={`decorative-icon ${className ?? ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={`decorative-icon ${className ?? ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </svg>
  );
}

export function Starburst({ className }: IconProps) {
  return (
    <svg className={`decorative-icon ${className ?? ""}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M24 4v40M4 24h40M10 10l28 28m0-28L10 38" />
    </svg>
  );
}
