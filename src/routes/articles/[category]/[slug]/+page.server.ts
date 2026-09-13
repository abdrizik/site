import { articles } from '$lib/utils/articles.server'
import { plugins } from '$lib/utils/markdown'
import { error } from '@sveltejs/kit'
import { parseMarkdown } from 'comark/parse'

export async function load({ params }) {
  const { category, slug } = params

  const article = articles.find((a) => a.slug === slug && a.categorySlug === category)
  if (!article) error(404, `Article not found: ${category}/${slug}`)

  const { raw, ...metadata } = article

  return {
    document: await parseMarkdown(raw.trim(), { plugins }),
    metadata,
    title: metadata.title,
    description: metadata.description,
    type: 'article' as const,
    published: metadata.publishAt
  }
}
