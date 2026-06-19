import {
  BookOpen,
  Sparkles,
  Gem,
  Zap,
  Compass,
  Bot,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  NotebookLM: BookOpen,
  Claude: Sparkles,
  Gemini: Gem,
  Make: Zap,
  Perplexity: Compass,
}

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan/10 border-cyan/20 text-cyan',
  purple: 'bg-purple/10 border-purple/20 text-purple',
  gold: 'bg-gold/10 border-gold/20 text-gold',
  green: 'bg-green/10 border-green/20 text-green',
}

interface Props {
  tool: string
  toolColor: string
  size?: 'sm' | 'md' | 'lg'
}

export default function ToolIcon({ tool, toolColor, size = 'md' }: Props) {
  const Icon = iconMap[tool] ?? Bot
  const colorClass = colorMap[toolColor] ?? colorMap.cyan

  const sizeMap = {
    sm: { wrapper: 'w-9 h-9', icon: 16 },
    md: { wrapper: 'w-12 h-12', icon: 22 },
    lg: { wrapper: 'w-16 h-16', icon: 30 },
  }

  const { wrapper, icon } = sizeMap[size]

  return (
    <div className={`${wrapper} rounded-xl border flex items-center justify-center flex-shrink-0 ${colorClass}`}>
      <Icon size={icon} strokeWidth={1.8} />
    </div>
  )
}
