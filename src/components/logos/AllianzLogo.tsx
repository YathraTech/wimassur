export function AllianzLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="15" className="fill-current" />
      <text x="20" y="26" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">
        A
      </text>
      <text x="45" y="26" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">
        Allianz
      </text>
    </svg>
  )
}