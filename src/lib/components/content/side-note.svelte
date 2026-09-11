<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    note: string
    children?: Snippet
  }

  const { note, children }: Props = $props()
</script>

<figure>
  <div>
    {#if children}{@render children()}{/if}
  </div>

  <figcaption data-serif>
    <span data-sr-only>Sidenote: </span>{note}
  </figcaption>
</figure>

<style>
  figure {
    display: flow-root;
    margin-block: calc(var(--spacing) * 6);

    div > :global(*) {
      margin-block: 0;
    }

    figcaption {
      margin-block-start: calc(var(--spacing) * 3);
      font-family: var(--font-serif);
      font-size: var(--text-sm);
      color: var(--prose-muted);
    }

    @media (width >= 64rem) {
      div {
        float: left;
        inline-size: 100%;
      }

      figcaption {
        float: right;
        clear: right;
        inline-size: var(--sidenote-width);
        margin-block-start: 0;
        margin-inline-end: calc(var(--sidenote-gutter) * -1);
      }
    }
  }
</style>
