import type { LayoutLoad } from './$types'

export const load: LayoutLoad = ({ data }) => {
  return {
    ...data,
    description: 'Design systems, motion, and the details that make an interface feel natural.',
    type: 'website' as const
  }
}
