import adapter from '@sveltejs/adapter-cloudflare'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: [vitePreprocess()],
      compilerOptions: {
        runes: true,
        experimental: { async: true }
      },
      experimental: { remoteFunctions: true },
      csp: {
        mode: 'hash',
        directives: {
          'default-src': ['self'],
          'img-src': ['self', 'data:', 'https:'],
          'script-src': ['self', 'sha256-jcwJm684VRXW0rgHuA43WkwhMkfb+33kc7HyqFZlZg0='],
          'style-src': ['self', 'unsafe-inline'],
          'object-src': ['none'],
          'base-uri': ['self'],
          'form-action': ['self']
        }
      },
      adapter: adapter()
    })
  ]
})
