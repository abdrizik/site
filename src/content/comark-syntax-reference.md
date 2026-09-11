---
title: Markdown preview
description: Every markdown feature supported by Comark in one page
publishAt: '2025-06-20'
category: Reference
tags:
  - markdown
  - reference
draft: true
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Paragraphs

This is a paragraph. Consecutive lines without a blank line between them are part of the same paragraph.

This is a second paragraph. A blank line separates paragraphs.

## Emphasis

_Italic_ with single asterisks. _Italic_ with underscores.

**Bold** with double asterisks. **Bold** with double underscores.

_**Bold and italic**_ with triple asterisks.

Mix them: **bold**, _italic_, and _**both**_ in one line.

## Strikethrough

~~This text is struck through~~ with double tildes.

## Code

Use backticks for `inline code` like `<div>` or `const x = 42`.

Double backticks for literal backticks: `` `code` ``.

```js
function greet(name) {
  return `Hello, ${name}!`
}
```

```
Plain code block without a language.
```

```css [Styled Button]
.button {
  padding: 0.5rem 1rem;
  background: #1e40af;
  color: white;
}
```

### Diff

```ts
console.log('old') // [!code --]
console.log('new') // [!code ++]
console.log('unchanged')
```

### Highlight

```ts
console.log('normal')
console.log('highlighted') // [!code highlight]
console.log('normal')
```

### Focus

```ts
console.log('blurred')
console.log('focused') // [!code focus]
console.log('blurred')
```

### Error and Warning

```ts
console.log('ok')
console.error('error') // [!code error]
console.warn('warning') // [!code warning]
console.log('info') // [!code info]
```

### Word Highlight

```ts
// [!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World
```

### Copy Button

```bash [Install]
pnpm add comark @comark/svelte
```

### Multi-line Highlight

```ts
// [!code highlight:3]
console.log('one')
console.log('two')
console.log('three')
console.log('not highlighted')
```

### Annotation Comment Styles

Annotations use each language's own comment syntax.

```bash
pnpm install # [!code highlight]
cp .env.example .env
docker build -t myapp . # [!code focus]
```

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr; /* [!code highlight] */
  grid-template-areas: 'sidebar content'; /* [!code focus] */
}
```

### More Languages

```yaml [API Endpoint Definition]
/api/users/{id}:
  get:
    summary: Get user by ID
    parameters:
      - name: id
        in: path
        required: true
```

```jsx [React Component]
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
    </div>
  )
}
```

## Links

[Basic link](https://example.com)

[Link with title](https://example.com 'Example Site')

**[Bold link](https://example.com)** and _[italic link](https://example.com)_.

## Autolinks

<https://example.com>

<user@example.com>

## Images

![Placeholder banner](https://placehold.co/600x200/0a0a0a/ffffff?text=Comark)

![With title](https://placehold.co/600x200/1e40af/ffffff?text=Title+Attribute 'Hover to see this')

[![Clickable banner](https://placehold.co/600x150/16a34a/ffffff?text=Click+Me)](https://example.com)

## Lists

- First item
- Second item with **bold** and `code`
  - Nested item
  - Another nested item
    - Deeply nested

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B

4. Ordered with unordered children
   - Unordered child
   - Another child
5. Second ordered item

## Deep and Mixed Nesting

1. Ordered level one
   1. Ordered level two
      1. Ordered level three
      2. Sibling at level three
   2. Back to level two
2. Ordered level one again

3. Ordered parent
   - Unordered child
     1. Ordered grandchild
     2. Second grandchild
   - Second unordered child
4. Second ordered item

## Loose Lists

Blank lines between items wrap each in `<p>`:

- First paragraph item.

- Second paragraph item.

- Third paragraph item.

## List with Rich Content

- Item with continuation paragraph

  This is a second paragraph inside the same list item.

- Item with indented code block

      const x = 1

- Item with nested blockquote

  > Quoted text inside a list item

1. Item with fenced code

   ```js
   function hello() {
     return 'world'
   }
   ```

2. Item continues normally

3. Item with a fence on the very next line, no blank line between
   ```js
   const tight = true
   ```

## Blockquotes

> A single paragraph blockquote.

> A multi-paragraph blockquote.
>
> This is the second paragraph.

> Level one.
>
> > Level two.
> >
> > > Level three.

> **Bold** inside a blockquote with a [link](https://example.com).
>
> - List inside a blockquote
> - Second item
>
> ```js
> console.log('hello')
> ```

> ### Heading inside a blockquote
>
> Followed by a paragraph in the same quote.

## Tables

| Feature       | Status    | Notes      |
| ------------- | --------- | ---------- |
| Bold          | Supported | `**text**` |
| Italic        | Supported | `*text*`   |
| Strikethrough | Built-in  | `~~text~~` |

| Left        |  Center  | Right |
| :---------- | :------: | ----: |
| A           |    B     |     C |
| Longer text | Centered |   123 |

| Tool        | Command        | Description                          |
| ----------- | -------------- | ------------------------------------ |
| **pnpm**    | `pnpm install` | Install all dependencies             |
| **Vite**    | `pnpm dev`     | Start [dev server](https://vite.dev) |
| ~~Webpack~~ | `npx webpack`  | _Legacy_ bundler                     |

## Horizontal Rule

Content above.

---

Content below.

## Line Breaks

This line breaks here\
and continues on the next line without a new paragraph.

## Backslash Escapes

\*not italic\*

\`not code\`

\[not a link\]

## HTML Entities

Named: &amp; &lt; &gt; &quot; &copy; &mdash;

Decimal: &#169; &#8212;

Hex: &#x2714; &#x2764;

## Unicode and Emoji

Literal characters pass through: ✓ ✕ → ← — … 🚀

| Feature | Supported |
| ------- | :-------: |
| Tables  |     ✓     |
| Magic   |     ✕     |

## Inline HTML

<details>
<summary>Click to expand</summary>

Hidden content with **markdown** inside.

</details>

<!-- This comment won't appear -->

Line one<br />line two.

Inline: <mark>highlighted</mark> and <kbd>Ctrl</kbd> + <kbd>S</kbd>.

## Cursor labels

Any element carrying a `data-cursor-label` attribute shows a pill beside the cursor arrow.

<span data-cursor-label="Not a link">Plain text with a label</span>

## Footnotes

Svelte[^1] compiles components at build time, unlike React[^2] which ships a runtime.

[^1]: The Svelte compiler produces minimal JavaScript output.

[^2]: React uses virtual DOM diffing at runtime.
