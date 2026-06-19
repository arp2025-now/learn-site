export default function PaywallGate({
  children,
  gumroadUrl = 'https://gum.co',
}: {
  children: React.ReactNode
  gumroadUrl?: string
}) {
  return (
    <div className="relative my-8">
      <div className="pointer-events-none select-none blur-sm opacity-40">
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-base/60 rounded-xl">
        <p className="text-white font-bold mb-2 text-center">
          מדריך זה זמין לחברי הקורס
        </p>
        <a
          href={gumroadUrl}
          className="bg-purple text-white font-medium px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          רכשי גישה ←
        </a>
      </div>
    </div>
  )
}
