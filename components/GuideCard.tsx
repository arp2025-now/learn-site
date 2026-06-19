import Link from 'next/link'
import type { GuideMeta } from '@/lib/guides'
import { toolColors } from '@/lib/toolColors'
import ToolIcon from '@/components/ToolIcon'

export default function GuideCard({ guide }: { guide: GuideMeta }) {
  const badgeClass = toolColors[guide.toolColor] ?? toolColors.cyan

  return (
    <Link href={`/guides/${guide.slug}`} className="group block">
      <div className="h-full bg-card border border-card-border rounded-2xl p-6 hover:border-purple/50 transition-all hover:-translate-y-0.5">
        <div className="flex items-start justify-between mb-4">
          <ToolIcon tool={guide.tool} toolColor={guide.toolColor} size="md" />
          <span className="text-muted/60 text-xs pt-1">{guide.readTime}</span>
        </div>
        <div className="mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
            {guide.tool}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-cyan transition-colors">
          {guide.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6">
          {guide.description}
        </p>
        <span className="text-cyan text-sm font-medium">
          קרא את המדריך ←
        </span>
      </div>
    </Link>
  )
}
