<script lang="ts">
  import ArticleList from '$lib/components/ui/article-list.svelte'
  import Intro from '$lib/components/ui/intro.svelte'
  import Reading from '$lib/components/ui/reading.svelte'
  import Projects from '$lib/components/ui/projects.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
</script>

<svelte:head>
  <title>Abdelrahman Rizik - Design Engineer</title>
  <meta
    name="description"
    content="Design Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />
  <meta
    name="keywords"
    content="Abdelrahman Rizik, Design Engineer, JavaScript, TypeScript, Vue, React, SvelteKit, Node.js, Web Development"
  />
  <link rel="canonical" href="https://abdrizik.xyz/" />

  <meta property="og:title" content="Abdelrahman Rizik - Design Engineer" />
  <meta
    property="og:description"
    content="Design Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />
  <meta property="og:url" content="https://abdrizik.xyz/" />

  <meta name="twitter:title" content="Abdelrahman Rizik - Design Engineer" />
  <meta
    name="twitter:description"
    content="Design Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />
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
