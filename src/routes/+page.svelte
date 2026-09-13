<script lang="ts">
  import ArticleList from '$lib/components/ui/article-list.svelte'
  import Intro from '$lib/components/ui/intro.svelte'
  import Projects from '$lib/components/ui/projects.svelte'
  import Reading from '$lib/components/ui/reading.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
</script>

<div>
  <Intro />

  <ArticleList articles={data.articles} />

  <Projects />

  <Reading />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 20);
    max-inline-size: var(--page-measure);
  }
</style>
