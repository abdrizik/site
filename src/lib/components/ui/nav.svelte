<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'
  import SoundSwitch from './sound-switch.svelte'
  import type { Attachment } from 'svelte/attachments'
  import ThemeSwitch from './theme-switch.svelte'

  const links = [
    { href: '/', label: 'index' },
    { href: '/lab', label: 'lab' },
    { href: '/books', label: 'books' },
    { href: '/uses', label: 'uses' }
  ] as const

  const index = $derived(
    links.findLastIndex(({ href }) =>
      `${page.url.pathname}/`.startsWith(href === '/' ? '/' : `${href}/`)
    )
  )

  const initial = page.url
  const navigated = $derived(page.url !== initial)

  let previousRow: HTMLElement | null = null

  const ease = (token: string) => getComputedStyle(document.documentElement).getPropertyValue(token)

  const glide: Attachment<HTMLElement> = (node) => {
    const row = node.closest('li')
    const from = previousRow?.getBoundingClientRect()
    const to = row?.getBoundingClientRect()
    previousRow = row

    if (!from || !to) return

    node.animate([{ translate: `${from.x - to.x}px ${from.y - to.y}px` }, { translate: '0 0' }], {
      duration: 320,
      easing: ease('--ease-in-out-quad')
    })
  }
</script>

<nav>
  <ul>
    {#each links as link, i (link.href)}
      <li>
        <a href={resolve(link.href)} aria-current={index === i ? 'page' : undefined}>
          {link.label}
        </a>

        {#if index === i}
          <span {@attach glide} aria-hidden="true">
            {#key page.url}
              <span class={{ arc: navigated }}></span>
            {/key}
          </span>
        {/if}
      </li>
    {/each}
  </ul>

  <div class="controls">
    <SoundSwitch />
    <ThemeSwitch />
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--spacing) * 6);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--spacing) * 8);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) * 1);
  }

  li {
    position: relative;
  }

  a {
    color: var(--color-text-base-secondary);
    transition: color 150ms ease;

    @media (hover: hover) {
      &:hover {
        color: var(--color-text-base);
      }
    }

    &[aria-current='page'] {
      color: var(--color-text-base);
    }

    &:focus-visible {
      border-radius: var(--radius-sm);
    }
  }

  a + span {
    position: absolute;
    inset-inline-end: calc(100% + var(--spacing) * 2);
    inset-block-start: 50%;
    inline-size: calc(var(--spacing) * 2);
    block-size: calc(var(--spacing) * 2);
    margin-block-start: calc(var(--spacing) * -1);
    pointer-events: none;

    span {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      background-color: var(--color-text-base);
      border-radius: calc(infinity * 1px);
    }

    .arc {
      animation: nav-dot-arc 320ms linear;
    }
  }

  @keyframes nav-dot-arc {
    0% {
      translate: 0 0;
      animation-timing-function: var(--ease-out-quad);
    }

    50% {
      translate: 0 calc(var(--spacing) * -9);
      animation-timing-function: var(--ease-in-quad);
    }

    100% {
      translate: 0 0;
    }
  }
</style>
