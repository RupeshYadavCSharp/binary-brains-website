interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 36 },
    md: { width: 160, height: 48 },
    lg: { width: 200, height: 60 },
  }

  const { width, height } = sizes[size]

  return (
    <svg
      viewBox="0 0 200 60"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pixel-style "B" icon */}
      <g>
        {/* Top row */}
        <rect x="0" y="0" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="8" y="0" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="16" y="0" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="24" y="0" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="0" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Second row */}
        <rect x="0" y="8" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="8" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="40" y="8" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Third row */}
        <rect x="0" y="16" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="16" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Middle row - B crossbar */}
        <rect x="0" y="24" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="8" y="24" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="16" y="24" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="24" y="24" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="24" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Fifth row */}
        <rect x="0" y="32" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="32" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="40" y="32" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Sixth row */}
        <rect x="0" y="40" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="40" y="40" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Bottom row */}
        <rect x="0" y="48" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="8" y="48" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="16" y="48" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="24" y="48" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="32" y="48" width="6" height="6" fill="currentColor" className="text-primary" />
        <rect x="40" y="48" width="6" height="6" fill="currentColor" className="text-primary" />

        {/* Extra pixel details for visual interest */}
        <rect x="8" y="8" width="3" height="3" fill="currentColor" className="text-primary/40" />
        <rect x="16" y="16" width="3" height="3" fill="currentColor" className="text-primary/40" />
        <rect x="8" y="40" width="3" height="3" fill="currentColor" className="text-primary/40" />
        <rect x="24" y="32" width="3" height="3" fill="currentColor" className="text-primary/40" />
      </g>

      {/* Text: BINARY */}
      <text
        x="58"
        y="24"
        fontFamily="var(--font-sans)"
        fontSize="18"
        fontWeight="700"
        letterSpacing="0.05em"
        fill="currentColor"
        className="text-primary"
      >
        BINARY
      </text>

      {/* Text: BRAINS */}
      <text
        x="58"
        y="48"
        fontFamily="var(--font-sans)"
        fontSize="18"
        fontWeight="700"
        letterSpacing="0.05em"
        fill="currentColor"
        className="text-foreground"
      >
        BRAINS
      </text>
    </svg>
  )
}
