import { getAllGuides } from '@/lib/guides'
import GuideCard from '@/components/GuideCard'

export default function HomePage() {
  const guides = getAllGuides()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block text-xs font-medium px-4 py-2 rounded-full border border-cyan/30 text-cyan bg-cyan/5 mb-6">
          • מדריכים חינמיים
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          למדו להשתמש ב-AI{' '}
          <span className="text-cyan">בעסק</span>
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          מדריכים מעשיים ופשוטים לכלי AI — NotebookLM, Claude, Gemini, Make ועוד.
          בלי ז&apos;רגון טכני. רק מה שעובד.
        </p>
      </div>

      {/* Guide Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  )
}
