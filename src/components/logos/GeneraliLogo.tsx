export function GeneraliLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified eagle/bird shape */}
      <path
        d="M15 20 L20 15 L25 18 L30 15 L35 20 L30 25 L25 22 L20 25 Z"
        className="fill-current"
      />
      <text x="45" y="26" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">
        Generali
      </text>
    </svg>
  )
}