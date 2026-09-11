<script lang="ts">
  import type { Article } from '$lib/utils/articles.server'
  import { formatDate } from '$lib/utils/format-date'

  let { metadata }: { metadata: Article } = $props()
</script>

<div>
  <h1>
    {metadata.title}
  </h1>

  <dl>
    <dt>Published under</dt>
    <dd>{metadata.category}</dd>

    <dt>on</dt>
    <dd>
      {formatDate(metadata.publishAt)}.
    </dd>
  </dl>
</div>

<style>
  div {
    position: relative;
    margin-block-end: calc(var(--spacing) * 16);

    h1 {
      margin-block-end: calc(var(--spacing) * 6);
      font-size: var(--text-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-base);
      text-wrap: balance;
    }

    dl {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--spacing) * 1);
      color: var(--color-text-neutral-tertiary);

      dd {
        color: var(--color-text-base);
        font-weight: var(--font-weight-medium);
      }
    }
  }
</style>
