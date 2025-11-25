export function MAIFLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="8" width="90" height="24" rx="12" className="fill-current" />
      <text x="50" y="25" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">
        MAIF
      </text>
    </svg>
  )
}