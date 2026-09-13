<script lang="ts">
  import { getSound } from '$lib/utils/sound-context'

  function toggle() {
    const root = document.documentElement
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark'

    root.dataset.theme = theme
    sound.play('theme')

    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }

  const sound = getSound()
</script>

<button type="button" onclick={toggle} aria-label="Toggle theme" data-icon-button>
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
  button svg {
    inline-size: calc(var(--spacing) * 4);
    block-size: calc(var(--spacing) * 4);
    transition: rotate 200ms var(--ease-in-out-cubic);

    :global(:root[data-theme='dark']) & {
      rotate: 180deg;
    }
  }
</style>
