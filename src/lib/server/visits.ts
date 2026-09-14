const INCREMENT = `
  INSERT INTO counters (name, total) VALUES (?, 1)
  ON CONFLICT (name) DO UPDATE SET total = total + 1
  RETURNING total
`

export async function recordVisit(db: D1Database) {
  const row = await db.prepare(INCREMENT).bind('visits').first<{ total: number }>()

  return row?.total ?? 0
}
