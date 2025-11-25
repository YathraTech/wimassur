export function AXALogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="5" width="30" height="30" rx="3" className="fill-current" />
      <text x="60" y="28" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
        AXA
      </text>
    </svg>
  )
}