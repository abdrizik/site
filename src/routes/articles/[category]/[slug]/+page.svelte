<script lang="ts">
  import { components } from '$lib/components/content/components'
  import ArticleHeader from '$lib/components/ui/article-header.svelte'
  import { MarkdownDocument } from '@comark/svelte'

  const { data } = $props()

  const { document, metadata } = $derived(data)
</script>

<svelte:head>
  <title>{metadata.title} | Abdelrahman Rizik</title>
  <meta name="description" content={metadata.description} />
</svelte:head>

<div>
  <ArticleHeader {metadata} />

  <MarkdownDocument value={document} {components} class="prose" />
</div>

<style>
  div {
    padding-inline-end: var(--sidenote-gutter);
  }
</style>
