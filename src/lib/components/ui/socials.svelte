<script lang="ts">
  const uid = $props.id()

  const accounts = [
    {
      name: 'bluesky',
      label: 'Bluesky',
      href: 'https://bsky.app/profile/abdrizik.bsky.social',
      icon: bluesky
    },
    { name: 'github', label: 'GitHub', href: 'https://github.com/abdrizik', icon: github },
    { name: 'x', label: 'X', href: 'https://x.com/abderizik', icon: x }
  ]
</script>

{#snippet bluesky()}
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      class="wing-left"
      d="M12.0012 11.4535C11.0788 9.53897 8.5657 5.97133 6.22962 4.21155C4.54403 2.9421 1.8125 1.95953 1.8125 5.08555C1.8125 5.70961 2.1691 10.3302 2.37861 11.0803C3.10583 13.688 5.75648 14.3531 8.11421 13.9507C3.99288 14.6543 2.94472 16.985 5.20884 19.3157C9.50879 23.7423 11.3892 18.2051 11.8707 16.7863C11.9598 16.5243 12.0012 16.4027 12.0012 16.5103Z"
      fill="currentColor"
    />
    <path
      class="wing-right"
      d="M12.0012 16.5103C12.0012 16.4027 12.0426 16.5243 12.1317 16.7863C12.6132 18.2051 14.4936 23.7423 18.7936 19.3157C21.0577 16.985 20.0095 14.6543 15.8882 13.9507C18.2459 14.3531 20.8966 13.688 21.6238 11.0803C21.8333 10.3302 22.1899 5.70961 22.1899 5.08555C22.1899 1.95953 19.4587 2.9421 17.7728 4.21155C15.4367 5.97133 12.9236 9.53897 12.0012 11.4535Z"
      fill="currentColor"
    />
  </svg>
{/snippet}

{#snippet github()}
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <mask id="cat-{uid}">
      <circle cx="12" cy="11.95" r="10" fill="white" />
      <g class="cat">
        <path
          d="M15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007L9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382L8.8375 24L15.1875 24Z"
          fill="black"
        />
        <path
          class="arm"
          d="M9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007Z"
          fill="black"
        />
      </g>
    </mask>
    <circle cx="12" cy="11.95" r="10" fill="currentColor" mask="url(#cat-{uid})" />
  </svg>
{/snippet}

{#snippet x()}
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <clipPath id="mark-{uid}">
      <path
        d="M17.5652 3.25H20.5319L14.0505 10.6628L21.6753 20.75H15.7052L11.0291 14.6322L5.67867 20.75H2.71017L9.64264 12.8212L2.32812 3.25H8.44986L12.6766 8.84192L17.5652 3.25ZM16.524 18.9731H18.1679L7.55662 4.93359H5.79256L16.524 18.9731Z"
      />
    </clipPath>
    <g clip-path="url(#mark-{uid})" stroke="currentColor">
      <line
        class="stroke-thick"
        x1="2.969"
        y1="0.065"
        x2="21.11"
        y2="23.935"
        stroke-width="5.1"
        pathLength="100"
      />
      <line
        class="stroke-thin"
        x1="21.638"
        y1="0.201"
        x2="1.605"
        y2="23.799"
        stroke-width="2.5"
        pathLength="100"
      />
    </g>
  </svg>
{/snippet}

<ul>
  {#each accounts as account (account.name)}
    <li>
      <a href={account.href} rel="noopener" target="_blank" data-social={account.name}>
        {@render account.icon()}
        <span data-sr-only>{account.label}</span>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) * 4);
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-icon-base-secondary);
    transition: color 150ms ease;

    @media (hover: hover) {
      &:hover {
        color: var(--color-icon-base);
      }
    }

    &:active svg {
      scale: 0.97;
    }

    svg {
      inline-size: calc(var(--spacing) * 4.5);
      block-size: calc(var(--spacing) * 4.5);
      transition: scale 150ms var(--ease-out);
    }
  }

  @media (hover: hover) {
    [data-social='bluesky']:hover {
      .wing-left {
        animation: flap-left 620ms var(--ease-in-out-cubic);
      }

      .wing-right {
        animation: flap-right 620ms var(--ease-in-out-cubic) 40ms;
      }
    }

    [data-social='github']:hover .arm {
      animation: wave 720ms var(--ease-in-out-cubic);
    }

    [data-social='x']:hover {
      .stroke-thick {
        animation: undraw 700ms var(--ease-in-out-cubic);
      }

      .stroke-thin {
        animation: undraw 700ms var(--ease-in-out-cubic) 90ms;
      }
    }
  }

  .wing-left,
  .wing-right {
    transform-box: view-box;
    transform-origin: 12px 12px;
  }

  @keyframes flap-left {
    0%,
    100% {
      transform: perspective(60px) rotateY(0deg);
    }

    30% {
      transform: perspective(60px) rotateY(62deg);
    }

    62% {
      transform: perspective(60px) rotateY(8deg);
    }

    82% {
      transform: perspective(60px) rotateY(42deg);
    }
  }

  @keyframes flap-right {
    0%,
    100% {
      transform: perspective(60px) rotateY(0deg);
    }

    30% {
      transform: perspective(60px) rotateY(-62deg);
    }

    62% {
      transform: perspective(60px) rotateY(-8deg);
    }

    82% {
      transform: perspective(60px) rotateY(-42deg);
    }
  }

  .cat {
    transform-box: fill-box;
    transform-origin: center;
  }

  .arm {
    transform-box: view-box;
    transform-origin: 9.54px 18.4px;
  }

  @keyframes wave {
    0%,
    100% {
      rotate: 0deg;
    }

    28% {
      rotate: -20deg;
    }

    58% {
      rotate: 13deg;
    }

    82% {
      rotate: -7deg;
    }
  }

  .stroke-thick,
  .stroke-thin {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
  }

  @keyframes undraw {
    0%,
    100% {
      stroke-dashoffset: 0;
    }

    46% {
      stroke-dashoffset: -100;
    }

    47% {
      stroke-dashoffset: 100;
    }
  }
</style>
