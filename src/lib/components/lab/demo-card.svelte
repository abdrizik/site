<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<article>
  {@render children()}
</article>

<style>
  article {
    display: grid;
    place-items: center;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    border: var(--stroke-border) solid var(--color-border-base-tertiary);
    border-radius: var(--radius-md);
  }
</style>
