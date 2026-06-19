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
            if (placeholder) placeholder.style.display = 'flex'
          }}
        />
        <div
          className="hidden items-center justify-center py-10 text-muted/40 text-sm"
          aria-hidden="true"
        >
          [צילום מסך בקרוב]
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
