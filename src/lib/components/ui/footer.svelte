<script lang="ts">
  import Socials from './socials.svelte'
  import Visits from './visits.svelte'

  const year = new Date().getFullYear()
</script>

<footer>
  <div>
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="41" fill="var(--color-bg-base)" />
      <circle cx="50" cy="50" r="36" fill="#facc15" />
    </svg>

    <div>
      <small>
        Set in <b>Switzer</b> and <b data-serif>Literata</b> &bull; Built with <b>SvelteKit</b>
      </small>
      <small>Designed by a <b>human</b></small>
      <small>&copy; {year} Abdelrahman Rizik</small>
    </div>
  </div>

  <div>
    <small><Visits /></small>
    <span aria-hidden="true"></span>
    <Socials />
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: calc(var(--spacing) * 6);
    margin-block-start: auto;
    padding-block-start: calc(var(--spacing) * 6);
    font-size: var(--text-sm);
    font-variant-numeric: tabular-nums;
    color: var(--color-text-base-tertiary);

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: calc(var(--spacing) * 8);

      svg {
        display: block;
        inline-size: calc(var(--spacing) * 5);
        block-size: calc(var(--spacing) * 5);
      }

      div {
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing) * 2);
      }
    }

    > div:last-child {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: calc(var(--spacing) * 4);

      span {
        inline-size: 0;
        block-size: calc(var(--spacing) * 4);
        border-inline-start: 1.5px solid var(--color-border-base-secondary);
      }
    }

    small {
      font-size: inherit;
    }

    b {
      color: var(--color-text-neutral-secondary);
      font-weight: var(--font-weight-semibold);
    }
  }
</style>
