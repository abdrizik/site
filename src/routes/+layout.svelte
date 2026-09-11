<script lang="ts">
  import { page } from '$app/state'
  import Cursor from '$lib/components/ui/cursor.svelte'
  import Footer from '$lib/components/ui/footer.svelte'
  import Nav from '$lib/components/ui/nav.svelte'
  import '$lib/styles/main.css'
  import { blur } from 'svelte/transition'

  const { children } = $props()
</script>

<div class="band"></div>

<div class="shell">
  <Nav />

  <main>
    {#key page.url.pathname}
      <div
        in:blur={{ duration: 600, delay: 200, amount: 4 }}
        out:blur={{ duration: 400, amount: 4 }}
      >
        {@render children()}
      </div>
    {/key}
  </main>

  <Footer />
</div>

<Cursor />

<style>
  .band {
    position: fixed;
    inset: 0 var(--page-gutter);
    margin-inline: auto;
    max-inline-size: var(--container-5xl);
    background-color: var(--color-bg-base);
    border-inline: var(--stroke-border) solid var(--color-border-base-tertiary);
  }

  .shell {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 36);
    position: relative;
    margin-inline: auto;
    max-inline-size: min(
      calc(var(--page-measure) + var(--sidenote-gutter) + 2 * var(--page-pad)),
      calc(100% - 4 * var(--page-gutter))
    );
    min-block-size: 100dvh;
    padding-inline: var(--page-pad);
    padding-block: calc(var(--spacing) * 24) calc(var(--spacing) * 12);

    main {
      position: relative;
      margin-block-end: calc(var(--spacing) * 12);

      > :not(:last-child) {
        position: absolute;
        inset-block-start: 0;
        inset-inline: 0;
        pointer-events: none;
      }
    }
  }
</style>
