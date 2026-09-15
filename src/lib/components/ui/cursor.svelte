<script lang="ts">
  import { MediaQuery } from 'svelte/reactivity'

  const fine = new MediaQuery('(hover: hover) and (pointer: fine)')

  let x = $state(0)
  let y = $state(0)

  let text = $state('')
  let shown = $state(false)
  let visible = $state(false)
  let pressed = $state(false)
  let interactive = $state(false)

  function inspect(target: EventTarget | null) {
    const node = target instanceof Element ? target : null
    const label = node?.closest<HTMLElement>('[data-cursor-label]')?.dataset.cursorLabel ?? ''

    interactive = node?.closest('a, button, [role="button"]') != null
    shown = label !== ''
    if (label) text = label
  }

  function track(event: PointerEvent) {
    x = event.clientX
    y = event.clientY
    visible = true
  }
</script>

<svelte:document
  onpointermove={track}
  onpointerover={(event) => inspect(event.target)}
  onpointerdown={() => (pressed = true)}
  onpointerup={() => (pressed = false)}
  onpointerleave={() => (visible = false)}
/>

{#snippet arrow()}
  <svg class="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5.66105 2.79854C3.88702 2.18542 2.1864 3.88605 2.79952 5.66008L7.92593 20.4931C8.6032 22.4528 11.3457 22.5311 12.1337 20.6133L14.4843 14.892C14.5605 14.7067 14.7077 14.5595 14.893 14.4833L20.6142 12.1327C22.5321 11.3447 22.4538 8.60222 20.4941 7.92495L5.66105 2.79854Z"
      fill="currentColor"
    />
  </svg>
{/snippet}

{#snippet hand()}
  <svg class="hand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M11.1875 9.12333H15.9853C18.3406 9.12333 20.25 11.0859 20.25 13.5069V14.1416C20.25 18.4817 16.8271 22 12.6047 22C9.76611 22 7.16121 20.3835 5.83916 17.8016L2.80581 11.8777C2.71598 11.7022 2.73582 11.4891 2.85641 11.3341L3.45831 10.5608C4.19399 9.61558 5.53587 9.46232 6.45548 10.2185L7.45583 11.0411V3.91781C7.45583 2.85863 8.29119 2 9.32165 2C10.3521 2 11.1875 2.85863 11.1875 3.91781V9.12333Z"
      fill="currentColor"
    />
  </svg>
{/snippet}

{#if fine.current}
  <div class={['layer', { visible, pressed, interactive }]} data-cursor-layer aria-hidden="true">
    <div class="pos" style:translate="{x}px {y}px">
      {@render arrow()}
      {@render hand()}

      <span class="label" data-shown={shown || undefined}>{text}</span>
    </div>
  </div>
{/if}

<style>
  :global(html:has([data-cursor-layer])),
  :global(html:has([data-cursor-layer]) *) {
    cursor: none;
  }

  .layer {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms var(--ease-out);
  }

  .layer.visible {
    opacity: 1;
  }

  .pos {
    position: absolute;
    top: 0;
    left: 0;
    will-change: translate;
  }

  .arrow,
  .hand {
    display: block;
    inline-size: calc(var(--spacing) * 3.75);
    block-size: calc(var(--spacing) * 3.75);
    color: var(--color-text-neutral);
    stroke: var(--color-bg-base);
    stroke-width: 3;
    stroke-linejoin: round;
    paint-order: stroke fill;
    transition:
      scale 160ms var(--ease-out-quad),
      opacity 160ms var(--ease-out-quad),
      rotate 160ms var(--ease-out-quad);
  }

  .hand {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    scale: 0.5;
    rotate: -40deg;
  }

  .layer.interactive .arrow {
    opacity: 0;
    scale: 0.5;
    rotate: 40deg;
  }

  .layer.interactive .hand {
    opacity: 1;
    scale: 1.1;
    rotate: 0deg;
  }

  .layer.pressed .arrow {
    scale: 0.97;
  }

  .layer.interactive.pressed .hand {
    scale: 1;
  }

  .label {
    position: absolute;
    top: 100%;
    left: calc(var(--spacing) * 3);
    padding-inline: calc(var(--spacing) * 2);
    padding-block: calc(var(--spacing) * 1);
    border-radius: calc(var(--spacing) * 1.5);
    background: var(--color-bg-neutral);
    color: var(--color-text-on-neutral);
    box-shadow: var(--shadow-raised);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--tracking-wide);
    white-space: nowrap;
    transform-origin: top left;
    opacity: 0;
    scale: 0.92;
    transition:
      opacity 140ms var(--ease-out),
      scale 140ms var(--ease-out-expo);
  }

  .label[data-shown] {
    opacity: 1;
    scale: 1;
  }
</style>
