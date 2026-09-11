<script lang="ts">
  import type { Attachment } from 'svelte/attachments'

  let visits = $state<number | null>(null)

  const formatted = $derived(visits === null ? null : new Intl.NumberFormat('en-US').format(visits))

  const hit: Attachment<HTMLElement> = () => {
    count()
  }

  async function count() {
    try {
      const response = await fetch('/api/visits?hit')
      if (!response.ok) return

      const { value } = (await response.json()) as { value: number | null }
      if (value != null) visits = value
    } catch {}
  }
</script>

<span {@attach hit}>
  {#if formatted}
    <span>{formatted} {visits === 1 ? 'visit' : 'visits'}</span>
  {/if}
</span>

<style>
  span {
    display: contents;
  }

  span span {
    display: inline;
    font-variant-numeric: tabular-nums;

    @media (prefers-reduced-motion: no-preference) {
      animation: fade-in 300ms var(--ease-out) both;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }
</style>
