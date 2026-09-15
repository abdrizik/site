<script lang="ts">
  import { resolve } from '$app/paths'
  import type { ArticleListItem } from '$lib/utils/articles.server'
  import { formatDate } from '$lib/utils/format-date'

  type Props = {
    article: ArticleListItem
  }

  let { article }: Props = $props()

  const date = $derived(formatDate(article.publishAt, 'short'))
</script>

<a
  href={resolve('/articles/[category]/[slug]', {
    category: article.categorySlug,
    slug: article.slug
  })}
>
  <span>{article.title}</span>
  <span aria-hidden="true"></span>
  <time datetime={article.publishAt}>{date}</time>
</a>

<style>
  a {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: calc(var(--spacing) * 3);
    padding-block: calc(var(--spacing) * 1.5);
    opacity: var(--article-opacity, 1);
    transition: opacity 150ms ease;

    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }

    &:active {
      opacity: 0.6;
    }

    span:first-of-type {
      font-weight: var(--font-weight-medium);
    }

    span + span {
      flex: 1;
      align-self: center;
      min-inline-size: calc(var(--spacing) * 4);
      border-block-end: var(--stroke-border) dotted var(--color-border-base-secondary);
    }

    time {
      flex-shrink: 0;
      font-size: var(--text-sm);
      font-variant-numeric: tabular-nums;
      color: var(--color-text-neutral-secondary);
    }
  }
</style>
