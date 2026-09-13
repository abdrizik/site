export interface SoundOptions<T extends Record<string, string>> {
  sounds: T
  enabled: boolean
}

export function createSound<T extends Record<string, string>>(options: SoundOptions<T>) {
  const { sounds } = options

  let enabled = $state(options.enabled)

  const cache = new Map<string, HTMLAudioElement>()

  return {
    get enabled() {
      return enabled
    },

    play(type: keyof T & string) {
      if (!enabled) return

      const url = sounds[type]
      let audio = cache.get(url)

      if (!audio) {
        audio = new Audio(url)
        cache.set(url, audio)
      }

      audio.currentTime = 0
      void audio.play().catch(() => {})
    },

    toggle() {
      enabled = !enabled
    }
  }
}
