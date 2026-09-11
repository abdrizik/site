import { articles, toListItem } from '$lib/utils/articles.server'

export function load() {
  return { articles: articles.map(toListItem) }
}
