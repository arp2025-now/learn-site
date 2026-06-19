export default function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-r-4 border-cyan bg-cyan/5 rounded-lg px-5 py-4">
      <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-2">
        כדאי לדעת
      </p>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  )
}
