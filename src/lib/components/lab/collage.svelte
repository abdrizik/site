<script lang="ts">
  import { books } from '$lib/data/books'
  import DemoCard from './demo-card.svelte'

  const picks = books.slice(1, 4)
</script>

<DemoCard>
  <div>
    {#each picks as book, index (book.title)}
      <figure style="--i: {index}">
        <img data-cover src={book.cover} alt={book.title} loading="lazy" draggable="false" />
      </figure>
    {/each}

    <p>Overlap is depth without shadow.</p>
  </div>
</DemoCard>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 4);
    padding: calc(var(--spacing) * 6);

    figure img {
      inline-size: 100%;
    }

    p {
      padding: calc(var(--spacing) * 4);
      font-family: var(--font-serif);
      line-height: 1.3;
      color: var(--color-text-neutral);
      text-wrap: balance;
      background-color: var(--color-bg-base);
    }

    @media (width >= 48rem) {
      display: grid;
      inline-size: 100%;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(7, calc(var(--spacing) * 3));
      gap: 0;
      padding-inline: calc(var(--spacing) * 6);
      padding-block: 0;
      isolation: isolate;

      figure,
      p {
        align-self: start;
        transition: rotate 500ms var(--ease-out-expo);
      }

      figure {
        z-index: calc(var(--i) + 1);

        &:nth-child(1) {
          grid-column: 2 / 6;
          grid-row: 1;
          rotate: -3.5deg;
        }

        &:nth-child(2) {
          grid-column: 5 / 9;
          grid-row: 2;
          rotate: 2deg;
        }

        &:nth-child(3) {
          grid-column: 8 / 12;
          grid-row: 1;
          rotate: 4.5deg;
        }
      }

      p {
        grid-column: 3 / 10;
        grid-row: 6;
        z-index: 5;
        rotate: -1deg;
      }

      figure:hover,
      p:hover {
        z-index: 7;
        rotate: 0deg;
      }
    }
  }
</style>
