<script lang="ts">
  import { books } from '$lib/data/books'
  import DemoCard from './demo-card.svelte'

  const SWEEP = 54
  const CARD = 5
  const TRACK = 24

  const angle = (index: number) =>
    books.length > 1 ? (index / (books.length - 1) - 0.5) * SWEEP : 0

  const step = books.length > 1 ? Math.min(CARD * 0.6, (TRACK - CARD) / (books.length - 1)) : 0
</script>

<DemoCard>
  <ul style="--card: {CARD}rem; --step: {step}rem">
    {#each books as book, index (book.title)}
      <li style="--a: {angle(index).toFixed(2)}deg">
        <img data-cover src={book.cover} alt={book.title} loading="lazy" draggable="false" />
      </li>
    {/each}
  </ul>
</DemoCard>

<style>
  ul {
    display: flex;
    justify-content: center;
    padding-block-start: calc(var(--spacing) * 10);

    li {
      flex: 0 0 auto;
      inline-size: var(--card);
      transform-origin: bottom center;
      rotate: var(--a);
      translate: 0 calc((1 - cos(var(--a))) * 22rem);

      & + li {
        margin-inline-start: calc(var(--step) - var(--card));
      }

      img {
        transform-origin: bottom center;
        transition:
          rotate 500ms var(--ease-out-expo),
          translate 500ms var(--ease-out-expo);
        inline-size: 100%;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover img {
          rotate: calc(var(--a) * -1);
          translate: 0 calc(var(--spacing) * -3);
        }
      }
    }
  }
</style>
