import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// Placeholder until the real counter exists. See _/visit-counter.md for the
// Cloudflare D1 plan. `?hit` will increment there; here it changes nothing.
const PLACEHOLDER = 0

export const GET: RequestHandler = () => {
  return json({ value: PLACEHOLDER }, { headers: { 'cache-control': 'no-store' } })
}
