<script lang="ts">
  import type { Attachment } from 'svelte/attachments'
  import { MediaQuery } from 'svelte/reactivity'

  const fine = new MediaQuery('(hover: hover) and (pointer: fine)')

  let x = 0
  let y = 0

  let text = $state('')
  let shown = $state(false)
  let visible = $state(false)
  let pressed = $state(false)

  function updateLabel(node: EventTarget | null) {
    const next =
      (node instanceof Element ? node.closest<HTMLElement>('[data-cursor-label]') : null)?.dataset
        .cursorLabel ?? ''

    shown = next !== ''
    if (next) text = next
  }

  const follow: Attachment<HTMLElement> = (node) => {
    let currentX = x
    let currentY = y
    let frame: number

    const tick = () => {
      currentX = x
      currentY = y

      node.style.translate = `${currentX}px ${currentY}px`
      frame = requestAnimationFrame(tick)
    }
    tick()

    return () => cancelAnimationFrame(frame)
  }
</script>

<svelte:document
  onpointermove={(event) => {
    x = event.clientX
    y = event.clientY
    visible = true
  }}
  onpointerover={(event) => updateLabel(event.target)}
  onpointerdown={() => (pressed = true)}
  onpointerup={() => (pressed = false)}
  onpointerleave={() => (visible = false)}
/>

{#if fine.current}
  <div class={['layer', { visible, pressed }]} data-cursor-layer aria-hidden="true">
    <div class="pos" {@attach follow}>
      <svg class="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5.66105 2.79854C3.88702 2.18542 2.1864 3.88605 2.79952 5.66008L7.92593 20.4931C8.6032 22.4528 11.3457 22.5311 12.1337 20.6133L14.4843 14.892C14.5605 14.7067 14.7077 14.5595 14.893 14.4833L20.6142 12.1327C22.5321 11.3447 22.4538 8.60222 20.4941 7.92495L5.66105 2.79854Z"
          fill="currentColor"
        />
      </svg>

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

  .arrow {
    display: block;
    inline-size: calc(var(--spacing) * 3.75);
    block-size: calc(var(--spacing) * 3.75);
    color: var(--color-text-base);
    transition: scale 150ms var(--ease-out-quad);
  }

  .layer.pressed .arrow {
    scale: 0.97;
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
