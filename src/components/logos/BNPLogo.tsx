export function BNPLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Four stars */}
      <g className="fill-current">
        <path d="M10 20 L12 14 L14 20 L20 20 L15 24 L17 30 L12 26 L7 30 L9 24 L4 20 Z" />
        <path d="M25 20 L27 14 L29 20 L35 20 L30 24 L32 30 L27 26 L22 30 L24 24 L19 20 Z" />
      </g>
      <text x="45" y="26" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        BNP Paribas
      </text>
    </svg>
  )
}