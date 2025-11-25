export function SocieteGeneraleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="10" width="20" height="20" className="fill-current" />
      <path d="M30 10 L40 30 L20 30 Z" className="fill-current" />
      <text x="50" y="26" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        Société Générale
      </text>
    </svg>
  )
}