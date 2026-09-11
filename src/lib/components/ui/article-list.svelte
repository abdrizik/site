<script lang="ts">
  import type { ArticleListItem } from '$lib/utils/articles.server'
  import ArticleComponent from './article.svelte'

  type Props = {
    articles: ArticleListItem[]
  }

  let { articles }: Props = $props()
</script>

<section>
  <h2 data-section-heading>articles</h2>

  <div>
    {#each articles as article (article.slug)}
      <ArticleComponent {article} />
    {/each}
  </div>
</section>

<style>
  div {
    display: flex;
    flex-direction: column;
    margin-block: calc(var(--spacing) * -1.5);

    @media (hover: hover) {
      &:hover {
        --article-opacity: 0.4;
      }
    }
  }
</style>
