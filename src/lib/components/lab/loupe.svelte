<script lang="ts">
  import DemoCard from './demo-card.svelte'
  import type { Attachment } from 'svelte/attachments'

  let active = $state(false)
  let x = $state(0)
  let y = $state(0)
  let scroll = $state(0)
  let revealed = $state(false)

  const portal: Attachment<HTMLElement> = (node) => {
    document.body.appendChild(node)
    return () => node.remove()
  }

  const mirror: Attachment<HTMLElement> = (node) => {
    const source = document.querySelector('.shell')
    if (!source) return

    const copy = source.cloneNode(true) as HTMLElement
    for (const el of copy.querySelectorAll('[id]')) el.removeAttribute('id')

    node.replaceChildren(copy)
    return () => node.replaceChildren()
  }

  function track(event: PointerEvent) {
    if (!active || event.pointerType !== 'mouse') return

    x = event.clientX
    y = event.clientY
    revealed = true
  }

  function toggle() {
    active = !active
    revealed = false
  }
</script>

<svelte:window
  bind:scrollY={scroll}
  onpointermove={track}
  onpointerleave={() => (revealed = false)}
/>

<DemoCard>
  <button type="button" aria-pressed={active} onclick={toggle}>
    <img
      src="/images/lab/loupe.webp"
      alt="A loupe following the pointer, magnifying the page underneath it"
      loading="lazy"
      draggable="false"
    />
  </button>
</DemoCard>

{#if active}
  <div class="root" {@attach portal} style="--x: {x}px; --y: {y}px; --scroll: {scroll}" inert>
    <div class="lens" class:revealed>
      <div class="stage" {@attach mirror}></div>
    </div>

    <div class="ring" class:revealed></div>
  </div>
{/if}

<style>
  button {
    display: block;
    inline-size: 100%;
    block-size: 100%;
    padding: 0;
    background: none;
    border: 0;

    &:focus-visible {
      outline-offset: calc(var(--stroke-focus-offset) * -1);
    }

    img {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  }

  .root {
    --spot: 16.665vh;
    --zoom: 1.8;

    display: contents;
  }

  .lens,
  .ring {
    position: fixed;
    pointer-events: none;
    opacity: 0;
    transition: opacity 280ms var(--ease-out);

    &.revealed {
      opacity: 1;
    }
  }

  .lens {
    inset: 0;
    background-color: var(--color-bg-base);
    clip-path: circle(var(--spot) at var(--x) var(--y));
  }

  .stage {
    position: absolute;
    inset-inline: 0;
    inset-block-start: calc(var(--scroll) * -1px);
    transform-origin: var(--x) calc(var(--y) + var(--scroll) * 1px);
    scale: var(--zoom);
  }

  .ring {
    inset-block-start: calc(var(--spot) * -1);
    inset-inline-start: calc(var(--spot) * -1);
    inline-size: calc(var(--spot) * 2);
    block-size: calc(var(--spot) * 2);
    translate: var(--x) var(--y);
    border-radius: 50%;
    box-shadow: inset 0 0 15px 5px color-mix(in oklab, var(--color-text-base) 55%, transparent);
  }
</style>
