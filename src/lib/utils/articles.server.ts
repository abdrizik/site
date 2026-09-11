import { dev } from '$app/environment'
import { parseFrontmatter } from 'comark/parse'

export type ArticleMeta = {
  title: string
  description: string
  category: string
  tags: string[]
  publishAt: string
  /* Drafts only show up on the dev server. */
  draft?: boolean
}

export type Article = ArticleMeta & {
  slug: string
  categorySlug: string
}

export type ArticleListItem = Pick<Article, 'title' | 'publishAt' | 'slug' | 'categorySlug'>

const sources = import.meta.glob<string>('../../content/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

export const articles = Object.entries(sources)
  .map(([path, raw]) => {
    const meta = parseFrontmatter(raw).data as ArticleMeta

    return {
      ...meta,
      raw,
      slug: path.replace('../../content/', '').replace(/\.md$/, ''),
      categorySlug: meta.category.toLowerCase().replace(/\s+/g, '-')
    }
  })
  .filter((article) => dev || !article.draft)
  .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())

export function toListItem({ title, publishAt, slug, categorySlug }: Article): ArticleListItem {
  return { title, publishAt, slug, categorySlug }
}
