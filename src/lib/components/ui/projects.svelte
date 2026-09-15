{#snippet shardsui()}
  <svg viewBox="1.537 1.637 20.7 20.7" fill="currentColor" aria-hidden="true">
    <path
      d="M15.4278 3.03394C14.4945 2.78414 13.5354 3.3379 13.2851 4.27103L12.2008 8.3132C11.9503 9.24706 12.5046 10.2071 13.4386 10.4571L17.4871 11.5407C18.4203 11.7905 19.3795 11.2367 19.6298 10.3036L20.7141 6.26142C20.9646 5.32756 20.4103 4.36752 19.4763 4.11753L15.4278 3.03394Z"
    />
    <path
      d="M5.47325 6.41118C5.26797 6.23912 4.98651 6.18959 4.73483 6.28125C4.48315 6.3729 4.29945 6.59182 4.25289 6.8556L3.01144 13.8885C2.96486 14.1523 3.06257 14.421 3.26777 14.5933C3.47297 14.7655 3.75448 14.8153 4.00628 14.7237L10.7244 12.2812C10.9763 12.1896 11.1602 11.9705 11.2067 11.7065C11.2533 11.4425 11.1553 11.1738 10.9499 11.0016L5.47325 6.41118Z"
    />
    <path
      d="M14.0098 13.3154C11.8866 13.3154 10.1641 15.0349 10.1641 17.1577C10.1641 19.2806 11.8866 21 14.0098 21C16.1329 21 17.8555 19.2806 17.8555 17.1577C17.8555 15.0349 16.1329 13.3154 14.0098 13.3154Z"
    />
  </svg>
{/snippet}

{#snippet notation()}
  <svg viewBox="0 0 24 24" fill="#eab308" aria-hidden="true">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.0376 19.5376 17.5 16.5 17.5C13.4624 17.5 11 15.0376 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 13.933 14.567 15.5 16.5 15.5C18.433 15.5 20 13.933 20 12C20 7.58172 16.4183 4 12 4Z"
    />
  </svg>
{/snippet}

<section>
  <h2 data-section-heading>projects</h2>

  <div>
    <article>
      <h3>intersection</h3>

      <p>
        A course on design engineering — the craft between design and front-end. Still in progress.
      </p>
    </article>

    <article>
      <h3>
        <a href="https://shardsui.com/" target="_blank" rel="noopener noreferrer">
          {@render shardsui()}
          <span data-sr-only>ShardsUI</span>
        </a>
      </h3>

      <p>
        ShardsUI is a set of headless, accessible UI components for Svelte 5. The parts are unstyled
        and composable, with ARIA, keyboard interaction and focus management already handled. I
        created it so the hard parts are done and the styling is still yours. Published as <code
          >@shardsui/svelte</code
        >.
      </p>
    </article>

    <article>
      <h3>
        <a href="https://notation.shardsui.com/" target="_blank" rel="noopener noreferrer">
          {@render notation()}
          <span data-sr-only>Notation</span>
        </a>
      </h3>

      <p>
        Notation draws hand-drawn annotations as animated SVG strokes — underlines, boxes, circles,
        highlights, strike-throughs, brackets and arrows, or a shape you write yourself. It has no
        dependencies, and redraws its strokes when the text reflows. Published as
        <code>@shardsui/notation</code>.
      </p>
    </article>
  </div>
</section>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing) * 16);

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-neutral);

      a {
        display: inline-flex;
        color: var(--color-icon-neutral);
        transform-origin: left center;
        transition: scale 150ms var(--ease-out);

        @media (hover: hover) {
          &:hover {
            scale: 1.02;
          }
        }

        &:active {
          scale: 0.97;
        }

        &:focus-visible {
          outline-offset: calc(var(--spacing) * 1.5);
          border-radius: var(--radius-sm);
        }
      }

      svg {
        inline-size: calc(var(--spacing) * 6);
        block-size: calc(var(--spacing) * 6);
      }
    }

    p {
      margin-block-start: calc(var(--spacing) * 3);
      max-inline-size: var(--page-measure);
      color: var(--color-text-neutral-secondary);

      code {
        font-family: var(--font-mono);
        font-size: 0.9em;
        color: var(--color-text-neutral);
      }
    }
  }
</style>
