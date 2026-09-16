<script lang="ts">
  import CopyButton from '$lib/components/ui/copy-button.svelte'
  import type { Snippet } from 'svelte'
  import type { Attachment } from 'svelte/attachments'

  type Props = {
    children?: Snippet
    class?: string
  }

  let { children, class: shikiClass }: Props = $props()

  let code = $state('')

  const readCode: Attachment<HTMLPreElement> = (node) => {
    code = node.textContent ?? ''
  }
</script>

<div class="not-prose">
  <CopyButton text={code} />

  <pre class={shikiClass} {@attach readCode}>{#if children}{@render children()}{/if}</pre>
</div>

<style>
  div {
    position: relative;
    margin-block: calc(var(--spacing) * 4);
    overflow: hidden;
    background-color: var(--color-bg-base-secondary);
    border-radius: var(--radius-md);

    @media (hover: hover) {
      --copy-opacity: 0;

      &:hover,
      &:focus-within {
        --copy-opacity: 1;
      }
    }

    pre {
      font-size: var(--text-sm);
      line-height: var(--text-sm--line-height);
      color: var(--color-text-base);
      outline: 0;
      display: flex;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scrollbar-width: thin;
      scrollbar-color: var(--color-icon-neutral-tertiary) transparent;
      padding-block: calc(var(--spacing) * 3);
    }

    :global(pre code) {
      display: grid;
      flex-grow: 1;
      font-family: var(--font-mono);
      white-space: normal;
    }

    :global(pre code .line:empty) {
      block-size: 1lh;
    }
  }
</style>
