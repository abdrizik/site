<script lang="ts">
  import { featured } from '$lib/data/books'
</script>

<section>
  <h2 data-section-heading>recent-reading</h2>

  <ul>
    {#each featured as book (book.title)}
      <li data-row>
        <span data-row-label>{book.title}</span>
        <span data-row-meta>{book.author}</span>
        <div data-book>
          <img src={book.cover} alt="" data-cover loading="lazy" draggable="false" />
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    display: flex;
    flex-direction: column;

    li {
      position: relative;
      padding-block: calc(var(--spacing) * 2);
      border-block-end: var(--stroke-border) solid var(--color-border-base-tertiary);
    }

    [data-row-label] {
      font-weight: var(--font-weight-medium);
    }

    [data-row-meta] {
      font-variant-numeric: normal;
      text-align: end;
    }

    [data-book] {
      position: absolute;
      inset-inline-end: 0;
      inset-block: 0;
      margin-block: auto;
      inline-size: calc(var(--spacing) * 24);
      aspect-ratio: 3 / 4;
      opacity: 0;
      pointer-events: none;
    }

    @media (width >= 64rem) and (hover: hover) and (pointer: fine) {
      [data-book] {
        inset-inline-end: calc(var(--spacing) * -40);
        rotate: -4deg;
        transition:
          opacity 300ms var(--ease-out-expo),
          rotate 300ms var(--ease-out-expo);
      }

      li:hover [data-book] {
        opacity: 1;
        rotate: 0deg;
      }
    }
  }
</style>
