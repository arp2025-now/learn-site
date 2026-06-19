import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ToolColor = 'cyan' | 'purple' | 'gold' | 'green'
export type Tier = 'free' | 'paid'

export interface GuideMeta {
  title: string
  description: string
  tool: string
  toolColor: ToolColor
  readTime: string
  date: string
  tier: Tier
  slug: string
}

const defaultGuidesDir = path.join(process.cwd(), 'content/guides')

export function getAllGuidesFromDir(dir: string = defaultGuidesDir): GuideMeta[] {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return { ...data, slug } as GuideMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getGuideBySlugFromDir(
  slug: string,
  dir: string = defaultGuidesDir
): { meta: GuideMeta; content: string } {
  const filePath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Guide not found: ${slug}`)
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: { ...data, slug } as GuideMeta, content }
}

// Convenience wrappers using the default content/guides directory
export const getAllGuides = () => getAllGuidesFromDir()
export const getGuideBySlug = (slug: string) => getGuideBySlugFromDir(slug)
