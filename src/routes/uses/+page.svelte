<script lang="ts">
  import { groups } from '$lib/data/uses'
</script>

<h1 data-sr-only>Uses</h1>

<p data-intro>The tools I build with.</p>

<div>
  {#each groups as group (group.name)}
    <section>
      <h2 data-section-heading>{group.name}</h2>

      <ul>
        {#each group.tools as tool (tool.title)}
          <li>
            <h4>{tool.title}</h4>

            <p>{tool.description}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 20);

    ul {
      display: flex;
      flex-direction: column;
      gap: calc(var(--spacing) * 8);
    }

    li {
      h4 {
        font-size: var(--text-base);
        font-weight: var(--font-weight-normal);
        color: var(--color-text-base);
      }

      p {
        margin-block-start: calc(var(--spacing) * 3);
        max-inline-size: var(--page-measure);
        font-size: var(--text-sm);
        color: var(--color-text-base-secondary);
      }
    }
  }
</style>
