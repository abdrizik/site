const DATE_STYLES = {
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  short: { year: 'numeric', month: 'short', day: 'numeric' }
} as const satisfies Record<string, Intl.DateTimeFormatOptions>

export function formatDate(dateString: string, style: keyof typeof DATE_STYLES = 'long') {
  return new Date(dateString).toLocaleDateString('en-US', DATE_STYLES[style])
}
