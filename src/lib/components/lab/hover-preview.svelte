<script lang="ts">
  import { books } from '$lib/data/books'
  import DemoCard from './demo-card.svelte'

  const rows = books.slice(0, 6)
</script>

<DemoCard>
  <ul>
    {#each rows as book (book.title)}
      <li>
        <span>{book.title}</span>
        <img data-cover src={book.cover} alt="" loading="lazy" draggable="false" />
      </li>
    {/each}
  </ul>
</DemoCard>

<style>
  ul {
    inline-size: 100%;
    padding: calc(var(--spacing) * 6);

    li {
      position: relative;
      font-size: var(--text-sm);

      /* The rule stops with the title, leaving white space for the cover. */
      span {
        max-inline-size: 80%;
        padding-block: calc(var(--spacing) * 2);
        color: var(--color-text-base);
        border-block-end: var(--stroke-border) solid var(--color-border-base-tertiary);
      }

      img {
        position: absolute;
        inset-inline-end: 0;
        inset-block: 0;
        margin-block: auto;
        inline-size: calc(var(--spacing) * 22);
        opacity: 0;
        rotate: -4deg;
        pointer-events: none;
        transition:
          opacity 300ms var(--ease-out-expo),
          rotate 300ms var(--ease-out-expo);
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover img {
          opacity: 1;
          rotate: 0deg;
        }
      }
    }
  }
</style>
