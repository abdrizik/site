export type Book = {
  title: string
  author: string
  cover: string
}

export const shelves: Record<number, Book[]> = {
  2026: [
    {
      title: 'The Language of Graphic Design',
      author: 'Richard Poulin',
      cover: '/images/covers/language-of-graphic-design.webp'
    },
    {
      title: 'Living with Complexity',
      author: 'Don Norman',
      cover: '/images/covers/living-with-complexity.webp'
    },
    {
      title: 'Make It Stick',
      author: 'Brown, Roediger & McDaniel',
      cover: '/images/covers/make-it-stick.webp'
    },
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      cover: '/images/covers/design-of-everyday-things.webp'
    }
  ],
  2025: [
    {
      title: '100 Things Every Designer Needs to Know About People',
      author: 'Susan Weinschenk',
      cover: '/images/covers/100-things.webp'
    },
    {
      title: 'Layout: A Practical Guide',
      author: 'Richard Poulin',
      cover: '/images/covers/layout-practical-guide.webp'
    }
  ],
  2024: [
    {
      title: 'Practical UI',
      author: 'Adham Dannaway',
      cover: '/images/covers/practical-ui.webp'
    },
    {
      title: 'Refactoring UI',
      author: 'Adam Wathan & Steve Schoger',
      cover: '/images/covers/refactoring-ui.webp'
    }
  ],
  2023: [
    {
      title: '14 Habits of Highly Productive Developers',
      author: 'Zeno Rocha',
      cover: '/images/covers/14-habits.webp'
    },
    {
      title: 'The Coding Career Handbook',
      author: 'Shawn Swyx Wang',
      cover: '/images/covers/coding-career-handbook.webp'
    }
  ],
  2022: [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      cover: '/images/covers/eloquent-javascript.webp'
    }
  ]
}

const FEATURED = [
  'Refactoring UI',
  'The Language of Graphic Design',
  'The Design of Everyday Things'
]

export const years = Object.keys(shelves)
  .map(Number)
  .sort((a, b) => b - a)

export const books = years.flatMap((year) => shelves[year])

export const featured = FEATURED.map((title) => {
  const book = books.find((entry) => entry.title === title)
  if (!book) throw new Error(`Featured book not on any shelf: ${title}`)

  return book
})
