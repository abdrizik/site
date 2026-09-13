import { createContext } from 'svelte'

export type Tone = 'nav' | 'theme' | 'copy' | 'mute' | 'unmute'

export type Player = {
  readonly enabled: boolean
  play: (type: Tone) => void
  toggle: () => void
}

export const [getSound, setSound] = createContext<Player>()
