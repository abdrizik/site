<script lang="ts">
  import { getSound } from '$lib/utils/sound-context'
  import { cubicInOut } from 'svelte/easing'
  import { Tween, prefersReducedMotion } from 'svelte/motion'

  const sound = getSound()

  const SPEAKER =
    'M13 4.83068C13 3.36329 11.3026 2.54749 10.1568 3.46416L6.07931 6.72614C5.85767 6.90345 5.58228 7.00005 5.29844 7.00005H3.75C2.23122 7.00005 1 8.23127 1 9.75005V14.2501C1 15.7688 2.23122 17.0001 3.75 17.0001H5.29844C5.58228 17.0001 5.85767 17.0967 6.07931 17.274L10.1568 20.5359C11.3026 21.4526 13 20.6368 13 19.1694V4.83068Z'
  const CROSS =
    'M22.03 9.47C22.323 9.763 22.323 10.237 22.03 10.53C21.323 11.237 20.616 11.945 19.909 12.652C19.202 13.359 18.495 14.066 17.788 14.773C17.495 15.066 17.02 15.066 16.727 14.773C16.434 14.48 16.434 14.005 16.727 13.712C17.434 13.005 18.141 12.298 18.848 11.591C19.555 10.884 20.263 10.177 20.97 9.47C21.263 9.177 21.737 9.177 22.03 9.47ZM16.727 9.47C17.02 9.177 17.495 9.177 17.788 9.47C18.495 10.177 19.202 10.884 19.909 11.591C20.616 12.298 21.323 13.005 22.03 13.712C22.323 14.005 22.323 14.48 22.03 14.773C21.737 15.066 21.263 15.066 20.97 14.773C20.263 14.066 19.555 13.359 18.848 12.652C18.141 11.945 17.434 11.237 16.727 10.53C16.434 10.237 16.434 9.763 16.727 9.47Z'
  const WAVES =
    'M18.718 4.222C19.01 3.929 19.485 3.929 19.778 4.222C21.841 6.285 23 9.083 23 12C23 14.917 21.841 17.715 19.778 19.778C19.485 20.071 19.01 20.071 18.718 19.778C18.425 19.485 18.425 19.01 18.718 18.718C20.499 16.936 21.5 14.52 21.5 12C21.5 9.48 20.499 7.064 18.718 5.282C18.425 4.99 18.425 4.515 18.718 4.222ZM15.359 7.581C15.652 7.288 16.127 7.288 16.419 7.581C17.592 8.753 18.25 10.342 18.25 12C18.25 13.658 17.592 15.247 16.419 16.419C16.127 16.712 15.652 16.712 15.359 16.419C15.066 16.127 15.066 15.652 15.359 15.359C16.25 14.468 16.75 13.26 16.75 12C16.75 10.74 16.25 9.532 15.359 8.641C15.066 8.348 15.066 7.873 15.359 7.581Z'

  const NUMBER = /-?\d+(?:\.\d+)?/g

  function morph(from: string, to: string) {
    const end = to.match(NUMBER)!.map(Number)

    return (progress: number) => {
      let i = 0

      return from.replace(NUMBER, (value) => {
        const start = Number(value)

        return (start + (end[i++] - start) * progress).toFixed(2)
      })
    }
  }

  const mark = morph(CROSS, WAVES)

  const target = $derived(sound.enabled ? 1 : 0)
  const tween = Tween.of(() => target, { duration: 200, easing: cubicInOut })
  const progress = $derived(prefersReducedMotion.current ? target : tween.current)

  function toggle() {
    if (sound.enabled) sound.play('mute')

    sound.toggle()

    if (sound.enabled) sound.play('unmute')
  }
</script>

<button
  type="button"
  onclick={toggle}
  aria-label="Toggle sound"
  aria-pressed={sound.enabled}
  data-icon-button
>
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={SPEAKER} />
    <path d={mark(progress)} />
  </svg>
</button>

<style>
  button svg {
    inline-size: calc(var(--spacing) * 4.5);
    block-size: calc(var(--spacing) * 4.5);
  }
</style>
