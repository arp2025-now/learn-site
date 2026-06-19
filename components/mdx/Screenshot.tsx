'use client'

interface Props {
  src: string
  alt: string
  caption?: string
}

export default function Screenshot({ src, alt, caption }: Props) {
  return (
    <figure className="my-6">
      <div className="rounded-xl border border-card-border overflow-hidden bg-card">
        <img
          src={src}
          alt={alt}
          className="w-full block"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement
            el.style.display = 'none'
            const placeholder = el.nextElementSibling as HTMLElement | null
            if (placeholder) placeholder.style.removeProperty('display')
          }}
        />
        <div
          style={{ display: 'none' }}
          className="flex flex-col items-center justify-center py-10 px-6 gap-3 border-2 border-dashed border-card-border rounded-xl"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/30">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <div className="text-center">
            <p className="text-muted/50 text-sm font-medium">צילום מסך בקרוב</p>
            <p className="text-muted/30 text-xs mt-1 font-mono ltr">{src}</p>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-muted/60 text-xs mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
