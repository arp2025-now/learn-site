import path from 'path'
import { getAllGuidesFromDir, getGuideBySlugFromDir } from '@/lib/guides'

const fixturesDir = path.join(__dirname, '../fixtures')

describe('getAllGuidesFromDir', () => {
  it('returns all guides', () => {
    const guides = getAllGuidesFromDir(fixturesDir)
    expect(guides).toHaveLength(2)
  })

  it('sorts guides newest-first by date', () => {
    const guides = getAllGuidesFromDir(fixturesDir)
    expect(guides[0].date).toBe('2026-06-19')
    expect(guides[1].date).toBe('2026-06-01')
  })

  it('includes slug derived from filename', () => {
    const guides = getAllGuidesFromDir(fixturesDir)
    const slugs = guides.map(g => g.slug)
    expect(slugs).toContain('test-guide-a')
    expect(slugs).toContain('test-guide-b')
  })

  it('parses frontmatter fields correctly', () => {
    const guides = getAllGuidesFromDir(fixturesDir)
    const guideA = guides.find(g => g.slug === 'test-guide-a')!
    expect(guideA.title).toBe('מדריך A לבדיקה')
    expect(guideA.tool).toBe('Claude')
    expect(guideA.tier).toBe('free')
  })
})

describe('getGuideBySlugFromDir', () => {
  it('returns meta and content for a valid slug', () => {
    const { meta, content } = getGuideBySlugFromDir('test-guide-a', fixturesDir)
    expect(meta.title).toBe('מדריך A לבדיקה')
    expect(content).toContain('תוכן המדריך A')
  })

  it('throws for an unknown slug', () => {
    expect(() => getGuideBySlugFromDir('does-not-exist', fixturesDir)).toThrow()
  })
})
