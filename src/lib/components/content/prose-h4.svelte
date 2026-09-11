<script lang="ts">
  import type { Snippet } from 'svelte'

  let { id, children }: { id?: string; children?: Snippet } = $props()
</script>

<h4 {id}>
  {@render children?.()}

  {#if id}
    <a class="anchor" href="#{id}" aria-label="Link to this section">#</a>
  {/if}
</h4>
