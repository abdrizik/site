<script lang="ts">
  import ArticleList from '$lib/components/ui/article-list.svelte'
  import Intro from '$lib/components/ui/intro.svelte'
  import Reading from '$lib/components/ui/reading.svelte'
  import Projects from '$lib/components/ui/projects.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()

  const title = 'Abdelrahman Rizik - Design Engineer'
  const description = 'Design systems, motion, and the details that make an interface feel natural.'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta
    name="keywords"
    content="Abdelrahman Rizik, Design Engineer, design systems, motion, interface design, web development"
  />
  <link rel="canonical" href="https://abdrizik.com/" />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://abdrizik.com/" />

  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>

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
