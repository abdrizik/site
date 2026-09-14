<script lang="ts">
  import { formatNumber } from '$lib/utils/format-number'

  const { visits }: { visits: number } = $props()
</script>

<span>{formatNumber(visits)} visits</span>

<style>
  span {
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
