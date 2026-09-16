<script lang="ts">
  import { browser } from '$app/environment'
  import { page } from '$app/state'
  import Cursor from '$lib/components/ui/cursor.svelte'
  import Footer from '$lib/components/ui/footer.svelte'
  import Nav from '$lib/components/ui/nav.svelte'
  import '$lib/styles/main.css'
  import { setSound } from '$lib/utils/sound-context'
  import { createSound } from '$lib/utils/sound.svelte'
  import { blur } from 'svelte/transition'

  const { children, data } = $props()

  const canonical = $derived(`https://abdrizik.com${page.url.pathname}`)

  const title = $derived(
    page.data.title
      ? `${page.data.title} | Abdelrahman Rizik`
      : 'Abdelrahman Rizik - Design Engineer'
  )

  const player = createSound({
    sounds: {
      nav: '/sounds/nav.wav',
      theme: '/sounds/theme.wav',
      copy: '/sounds/copy.wav',
      mute: '/sounds/mute.wav',
      unmute: '/sounds/unmute.wav'
    },
    enabled: browser && localStorage.getItem('sound') !== 'off'
  })

  setSound(player)

  function click(event: MouseEvent) {
    const target = event.target

    if (target instanceof Element && target.closest('a[href]')) player.play('nav')
  }

  $effect(() => {
    try {
      localStorage.setItem('sound', player.enabled ? 'on' : 'off')
    } catch {}
  })
</script>

<svelte:document onclick={click} />

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={page.data.description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content={page.data.type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={page.data.description} />
  <meta property="og:url" content={canonical} />

  {#if page.data.published}
    <meta property="article:published_time" content={page.data.published} />
  {/if}
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<div class="band"></div>

<div class="shell">
  <Nav />

  <main id="main" tabindex="-1">
    {#key page.url.pathname}
      <div
        in:blur={{ duration: 600, delay: 200, amount: 4 }}
        out:blur={{ duration: 400, amount: 4 }}
      >
        {@render children()}
      </div>
    {/key}
  </main>

  <Footer visits={data.visits} />
</div>

<Cursor />

<style>
  .skip {
    position: fixed;
    inset-block-start: calc(var(--spacing) * 2);
    inset-inline-start: calc(var(--spacing) * 2);
    z-index: 10;
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 3);
    color: var(--color-text-neutral);
    background-color: var(--color-bg-base);
    border: var(--stroke-border) solid var(--color-border-base-tertiary);
    border-radius: var(--radius-md);
    translate: 0 calc(-100% - var(--spacing) * 4);

    &:focus-visible {
      translate: 0 0;
    }
  }

  .band {
    position: absolute;
    inset: 0 var(--page-gutter);
    margin-inline: auto;
    max-inline-size: var(--container-5xl);
    background-color: var(--color-bg-base);
    border-inline: var(--stroke-border) solid var(--color-border-base-tertiary);
    transition:
      background-color 200ms var(--ease-out),
      border-color 200ms var(--ease-out);
  }

  .shell {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 16);
    position: relative;
    margin-inline: auto;
    max-inline-size: min(
      calc(var(--page-measure) + var(--sidenote-gutter) + 2 * var(--page-pad)),
      calc(100% - 4 * var(--page-gutter))
    );
    min-block-size: 100dvh;
    padding-inline: var(--page-pad);
    padding-block: calc(var(--spacing) * 14) calc(var(--spacing) * 12);

    main {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      margin-block-end: calc(var(--spacing) * 12);

      > * {
        grid-area: 1 / 1;
      }

      > :not(:last-child) {
        pointer-events: none;
      }
    }

    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 36);
      padding-block-start: calc(var(--spacing) * 24);
    }
  }
</style>
