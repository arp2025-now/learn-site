export default function Step({
  number,
  children,
}: {
  number: number
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 my-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
        <span className="text-cyan font-bold text-sm">{number}</span>
      </div>
      <div className="flex-1 text-muted text-sm leading-relaxed pt-2">
        {children}
      </div>
    </div>
  )
}
