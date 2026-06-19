import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllGuides, getGuideBySlug } from '@/lib/guides'
import { mdxComponents } from '@/components/mdx'
import GuideCard from '@/components/GuideCard'

const toolColors: Record<string, string> = {
  cyan: 'text-cyan border-cyan/30 bg-cyan/10',
  purple: 'text-purple border-purple/30 bg-purple/10',
  gold: 'text-gold border-gold/30 bg-gold/10',
  green: 'text-green border-green/30 bg-green/10',
}

export async function generateStaticParams() {
  return getAllGuides().map(g => ({ slug: g.slug }))
}

export default async function GuidePage({ params }: { params: { slug: string } }) {
  let guide: ReturnType<typeof getGuideBySlug>
  try {
    guide = getGuideBySlug(params.slug)
  } catch {
    notFound()
  }

  const { meta, content } = guide
  const badgeClass = toolColors[meta.toolColor] ?? toolColors.cyan
  const allGuides = getAllGuides()
  const related = allGuides.filter(g => g.slug !== meta.slug).slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <a href="/" className="text-muted text-sm hover:text-white transition-colors">
          בית
        </a>
        <span className="text-muted/40 mx-2">←</span>
        <span className="text-muted/60 text-sm">{meta.tool}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${badgeClass}`}>
            {meta.tool}
          </span>
          <span className="text-muted/60 text-xs">{meta.readTime} קריאה</span>
        </div>
        <h1 className="text-3xl font-bold text-white leading-tight mb-4">
          {meta.title}
        </h1>
        <p className="text-muted text-lg leading-relaxed">{meta.description}</p>
      </header>

      {/* MDX Content */}
      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents as any} />
      </article>

      {/* CTA */}
      <div className="mt-16 p-8 bg-card border border-card-border rounded-2xl text-center">
        <h2 className="text-white font-bold text-xl mb-3">
          רוצים שנקים לכם מערכת כזו?
        </h2>
        <p className="text-muted text-sm mb-6">
          AP Automations בונה עבורכם את האוטומציה — מהרעיון ועד הפעלה.
        </p>
        <a
          href="https://apauto.co.il/#contact"
          className="inline-block bg-purple text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          לפגישת ייעוץ חינם ←
        </a>
      </div>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-white font-bold text-xl mb-6">מדריכים נוספים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(g => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
