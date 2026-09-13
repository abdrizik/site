<script lang="ts">
  import ArcFan from '$lib/components/lab/arc-fan.svelte'
  import AzIndex from '$lib/components/lab/az-index.svelte'
  import BookmarkCard from '$lib/components/lab/bookmark-card.svelte'
  import Collage from '$lib/components/lab/collage.svelte'
  import Deck from '$lib/components/lab/deck.svelte'
  import HoverPreview from '$lib/components/lab/hover-preview.svelte'
  import Loupe from '$lib/components/lab/loupe.svelte'
  import MilkstrawSidebar from '$lib/components/lab/milkstraw-sidebar.svelte'
</script>

<h1 data-sr-only>Lab</h1>

<p data-intro>Experiments, and things I liked on the web &mdash; rebuilt to see how they work.</p>

<div>
  <section>
    <h2 data-row>
      <span data-row-label>Book covers</span>
      <span data-row-meta>5 experiments</span>
    </h2>

    <ul>
      <li><ArcFan /></li>
      <li><Deck /></li>
      <li><HoverPreview /></li>
      <li><Collage /></li>
      <li><AzIndex /></li>
    </ul>
  </section>

  <section>
    <h2 data-row>
      <span data-row-label>Interaction</span>
      <span data-row-meta>1 experiment</span>
    </h2>

    <ul>
      <li><Loupe /></li>
    </ul>
  </section>

  <section>
    <h2 data-row>
      <span data-row-label>Navigation</span>
      <span data-row-meta>1 experiment</span>
    </h2>

    <ul>
      <li><MilkstrawSidebar /></li>
    </ul>
  </section>

  <section>
    <h2 data-row>
      <span data-row-label>Layout</span>
      <span data-row-meta>1 experiment</span>
    </h2>

    <ul>
      <li><BookmarkCard /></li>
    </ul>
  </section>
</div>

<style>
  div {
    --card: min(calc(var(--spacing) * 128), 100%);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 20);

    h2 {
      margin-block-end: calc(var(--spacing) * 4);
      padding-block: calc(var(--spacing) * 1.5);
      font-weight: var(--font-weight-normal);
    }

    ul {
      display: flex;
      gap: calc(var(--spacing) * 8);
      mask-image: linear-gradient(
        to right,
        #000 calc(100% - calc(var(--spacing) * 20)),
        transparent
      );
      margin-inline: calc(var(--page-pad) * -1);
      padding-inline: var(--page-pad);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
    }

    li {
      flex: 0 0 var(--card);
      scroll-snap-align: center;
    }
  }
</style>
