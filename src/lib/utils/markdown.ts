import { shikiThemes, shikiTransformers } from '$lib/utils/highlight'
import footnotes from 'comark/plugins/footnotes'
import shiki from 'comark/plugins/shiki'
import c from 'shiki/langs/c.mjs'
import jsx from 'shiki/langs/jsx.mjs'
import go from 'shiki/langs/go.mjs'
import sql from 'shiki/langs/sql.mjs'

export const plugins = [
  shiki({
    themes: shikiThemes,
    transformers: shikiTransformers,
    /* The plugin registers vue, tsx, svelte, ts, js, bash, json, yaml and
       astro on its own; anything else has to be handed to it. */
    languages: [c, jsx, go, sql]
  }),
  footnotes({ hr: false })
]
