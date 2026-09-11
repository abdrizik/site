import syntaxThemeDark from '$lib/themes/syntax-theme-dark.json'
import syntaxThemeLight from '$lib/themes/syntax-theme-light.json'
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight
} from '@shikijs/transformers'
import type { ThemeRegistration } from 'shiki'

export const shikiThemes = {
  light: syntaxThemeLight as ThemeRegistration,
  dark: syntaxThemeDark as ThemeRegistration
}

export const shikiTransformers = [
  transformerNotationDiff(),
  transformerMetaHighlight(),
  transformerNotationHighlight(),
  transformerNotationErrorLevel(),
  transformerNotationFocus(),
  transformerNotationWordHighlight()
]
