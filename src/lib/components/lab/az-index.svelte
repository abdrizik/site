<script lang="ts">
  import { books } from '$lib/data/books'
  import DemoCard from './demo-card.svelte'

  const sortKey = (title: string) => title.replace(/^The /, '')

  const letters = [...new Set(books.map((book) => sortKey(book.title)[0]))].sort()

  const under = (letter: string) => books.filter((book) => sortKey(book.title).startsWith(letter))
</script>

<DemoCard>
  <div>
    {#each letters as letter (letter)}
      <section>
        <span>{letter}</span>
        <ul>
          {#each under(letter) as book (book.title)}
            <li>{book.title}</li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</DemoCard>

<style>
  div {
    columns: 2;
    column-gap: calc(var(--spacing) * 8);
    inline-size: 100%;
    padding: calc(var(--spacing) * 6);

    section {
      break-inside: avoid;
      margin-block-end: calc(var(--spacing) * 4);
    }

    span {
      display: block;
      margin-block-end: calc(var(--spacing) * 1);
      font-family: var(--font-serif);
      font-size: var(--text-lg);
      line-height: 1;
      color: var(--color-text-neutral);
    }

    li {
      font-size: var(--text-xs);
      line-height: 1.5;
      color: var(--color-text-neutral-secondary);
    }

    @media (width >= 48rem) {
      columns: 3;
    }
  }
</style>
