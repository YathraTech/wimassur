export function GroupamaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5 L35 12.5 L35 27.5 L20 35 L5 27.5 L5 12.5 Z"
        className="fill-current"
      />
      <text x="20" y="25" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">
        G
      </text>
      <text x="45" y="26" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">
        Groupama
      </text>
    </svg>
  )
}