<script lang="ts">
  import { shelves, years } from '$lib/data/books'
</script>

<h1 data-sr-only>Books</h1>

<p data-intro>Books I've read.</p>

<div>
  {#each years as year (year)}
    {@const count = shelves[year].length}

    <section>
      <h2 data-row>
        <span data-row-label>{year}</span>
        <span data-row-meta>{count} {count === 1 ? 'book' : 'books'}</span>
      </h2>

      <ul>
        {#each shelves[year] as book (book.title)}
          <li>
            <div data-book>
              <img src={book.cover} alt="" data-cover loading="lazy" draggable="false" />
            </div>
            <span>{book.title}</span>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  div {
    --cover: calc(var(--spacing) * 32);
    --shelf-gap: calc(var(--spacing) * 4);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 24);

    h2 {
      margin-block-end: calc(var(--spacing) * 4);
      padding-block: calc(var(--spacing) * 1.5);
      font-weight: var(--font-weight-normal);

      [data-row-label] {
        color: var(--color-text-base-secondary);
      }
    }

    ul {
      display: flex;
      gap: var(--shelf-gap);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
    }

    li {
      flex: 0 0 var(--cover);
      scroll-snap-align: start;

      span {
        display: block;
        margin-block-start: calc(var(--spacing) * 2);
        font-size: var(--text-sm);
        color: var(--color-text-base);
      }
    }
  }
</style>
