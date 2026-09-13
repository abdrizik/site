<script lang="ts">
  import { books } from '$lib/data/books'
  import DemoCard from './demo-card.svelte'

  const deck = books.slice(0, 8)
</script>

<DemoCard>
  <ul style="--mid: {(deck.length - 1) / 2}">
    {#each deck as book, index (book.title)}
      <li style="--i: {index}">
        <img data-cover src={book.cover} alt={book.title} loading="lazy" draggable="false" />
      </li>
    {/each}
  </ul>
</DemoCard>

<style>
  ul {
    --collapse: calc(var(--spacing) * -9);
    display: flex;
    justify-content: center;
    padding-block: calc(var(--spacing) * 2);

    li {
      inline-size: calc(var(--spacing) * 20);
      margin-inline-start: calc(var(--spacing) * -7);
      translate: calc((var(--i) - var(--mid)) * var(--collapse)) 0;
      rotate: calc(var(--i) * 2deg - 7deg);
      transition:
        translate 450ms var(--ease-in-out-cubic),
        rotate 450ms var(--ease-in-out-cubic);

      &:first-child {
        margin-inline-start: 0;
      }

      img {
        inline-size: 100%;
      }
    }

    &:hover li {
      translate: 0 0;
      rotate: 0deg;
    }
  }
</style>
