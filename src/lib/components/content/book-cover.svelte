<script lang="ts">
  type Props = {
    src: string
    alt: string
    caption?: string
  }

  const { src, alt, caption }: Props = $props()
</script>

<figure class="not-prose">
  <img {src} {alt} data-cover draggable="false" />

  {#if caption}
    <figcaption>
      {caption}
    </figcaption>
  {/if}
</figure>

<style>
  figure {
    margin-inline: auto;
    margin-block: calc(var(--spacing) * 8);
    max-inline-size: var(--container-md);

    img {
      inline-size: 100%;
      border-radius: var(--radius-lg);
      pointer-events: none;
    }

    figcaption {
      margin-block-start: calc(var(--spacing) * 3);
      font-size: var(--text-sm);
      text-align: center;
      color: var(--color-text-base-secondary);
    }

    @media (width >= 40rem) {
      max-inline-size: var(--container-xs);
    }
  }
</style>
