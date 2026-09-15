<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = {
    children?: Snippet
    class?: string
  }

  let { children, class: classProp }: Props = $props()
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="table-scroll" role="region" aria-label="Scrollable table" tabindex="0">
  <table class={classProp}>
    {#if children}{@render children()}{/if}
  </table>
</div>

<style>
  .table-scroll {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: var(--color-icon-neutral-tertiary) transparent;
  }
</style>
