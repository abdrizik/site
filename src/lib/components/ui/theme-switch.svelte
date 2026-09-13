<script lang="ts">
  function toggle() {
    const root = document.documentElement
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark'

    root.dataset.theme = theme

    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }
</script>

<button type="button" onclick={toggle} aria-label="Toggle theme">
  {@render themeIcon()}
</button>

{#snippet themeIcon()}
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5V20.5ZM22 12C22 17.5228 17.5228 22 12 22C11.7275 22 11.4573 21.9891 11.19 21.9676C6.04558 21.5549 2 17.2502 2 12C2 6.74975 6.04558 2.44515 11.19 2.03237C11.4573 2.01092 11.7275 2 12 2C17.5228 2 22 6.47715 22 12Z"
      fill="currentColor"
    />
  </svg>
{/snippet}

<style>
  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-icon-base-secondary);
    transition:
      color 150ms var(--ease-out),
      scale 150ms var(--ease-out);

    @media (hover: hover) {
      &:hover {
        color: var(--color-icon-secondary-hover);
      }
    }

    &:active {
      scale: 0.97;
    }

    &:focus-visible {
      border-radius: calc(infinity * 1px);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      inline-size: calc(var(--spacing) * 11);
      block-size: calc(var(--spacing) * 11);
    }

    svg {
      inline-size: calc(var(--spacing) * 4);
      block-size: calc(var(--spacing) * 4);
      transition: rotate 200ms var(--ease-out-quad);

      :global(:root[data-theme='dark']) & {
        rotate: 180deg;
      }
    }
  }
</style>
