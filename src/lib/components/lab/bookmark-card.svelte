<script lang="ts">
  import DemoCard from './demo-card.svelte'
</script>

<DemoCard>
  <div class="ground">
    <div class="card">
      <div class="paper"></div>
      <span class="ribbon" aria-hidden="true"></span>
    </div>
  </div>
</DemoCard>

<style>
  .ground {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    padding: calc(var(--spacing) * 4);
    background-color: var(--color-bg-base-secondary);
  }

  .card {
    position: relative;
    inline-size: 100%;
    block-size: 100%;
    filter: drop-shadow(1px 0 0 var(--color-border-base-tertiary))
      drop-shadow(-1px 0 0 var(--color-border-base-tertiary))
      drop-shadow(0 1px 0 var(--color-border-base-tertiary))
      drop-shadow(0 -1px 0 var(--color-border-base-tertiary));
  }

  .paper {
    --zig: 3px;
    block-size: 100%;
    background-color: var(--color-bg-base);
    mask:
      repeating-conic-gradient(
          from atan(-0.5) at var(--zig),
          #0000 0 calc(2 * atan(0.5)),
          #000 0 50%
        )
        calc(var(--zig) * -1) calc(var(--zig) * 2) / 100% calc(var(--zig) * 4),
      repeating-conic-gradient(
          from calc(90deg + atan(-0.5)) at 50% var(--zig),
          #0000 0 calc(2 * atan(0.5)),
          #000 0 50%
        )
        calc(var(--zig) * 2) calc(var(--zig) * -1) / calc(var(--zig) * 4) 100%;
    mask-composite: intersect;
  }

  .ribbon {
    position: absolute;
    inset-block-start: calc(var(--spacing) * -1);
    inset-inline-end: calc(var(--spacing) * 8);
    inline-size: calc(var(--spacing) * 5);
    block-size: calc(var(--spacing) * 8);
    background: linear-gradient(to bottom, var(--color-red-500), var(--color-red-700));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - var(--spacing) * 2), 0 100%);

    @media (prefers-reduced-motion: no-preference) {
      transition: translate 900ms var(--ease-out-expo);

      @starting-style {
        translate: 0 -100%;
      }
    }
  }
</style>
