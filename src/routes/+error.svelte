<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  const heading = $derived(page.status === 404 ? 'Page Not Found' : 'Internal Server Error')
</script>

<svelte:head>
  <title>{heading} | Abdelrahman Rizik</title>
  <meta name="description" content={heading} />
</svelte:head>

<div>
  <p>{page.status}</p>

  <h1>
    {heading}
  </h1>

  <a href={resolve('/')}>Home</a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-wrap: balance;

    p {
      font-size: var(--text-sm);
      color: var(--color-text-base-tertiary);
      font-variant-numeric: tabular-nums;
    }

    h1 {
      margin-block-start: calc(var(--spacing) * 4);
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-medium);
      letter-spacing: var(--tracking-tight);
      color: var(--color-text-base);
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: calc(var(--spacing) * 1.5);
      margin-block-start: calc(var(--spacing) * 10);
      padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 2.5);
      font-size: var(--text-sm);
      line-height: var(--text-sm--line-height);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-base);
      background-color: var(--color-bg-base);
      border: var(--stroke-border) solid var(--color-border-base-secondary);
      border-radius: calc(infinity * 1px);
      transition:
        background-color 150ms var(--ease-out),
        scale 150ms var(--ease-out);

      @media (hover: hover) {
        &:hover {
          background-color: var(--color-bg-base-secondary);
        }
      }

      &:active {
        scale: 0.97;
      }
    }
  }
</style>
