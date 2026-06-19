export default function Header() {
  return (
    <header className="border-b border-card-border bg-base/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://apauto.co.il" className="text-muted text-sm hover:text-white transition-colors">
          ← חזרה ל-AP Automations
        </a>
        <a href="/" className="text-cyan font-bold text-lg tracking-wide">
          AP Learn
        </a>
      </div>
    </header>
  )
}
