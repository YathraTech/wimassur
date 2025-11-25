export function CreditAgricoleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified leaf shape */}
      <path
        d="M15 25 Q10 15 20 10 Q25 15 25 20 Q25 25 20 30 Q15 30 15 25"
        className="fill-current"
      />
      <text x="35" y="26" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        Crédit Agricole
      </text>
    </svg>
  )
}