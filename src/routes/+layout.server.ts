import { recordVisit } from '$lib/server/visits'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ platform }) => {
  const db = platform?.env.DB
  if (!db) return { visits: 0 }

  return { visits: await recordVisit(db) }
}
