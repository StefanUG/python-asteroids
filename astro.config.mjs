import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import { unified } from '@astrojs/markdown-remark'
import remarkPythonRun from './remark-python-run.mjs'
import rehypeExternalLinks from './rehype-external-links.mjs'

export default defineConfig({
  site: 'https://StefanUG.github.io',
  base: '/python-asteroids/',
  integrations: [
    starlight({
      title: 'Asteroids med Python',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Dansk', lang: 'da' },
      },
      // Skulpt loaded globally so every PythonRun instance can call window.Sk
      head: [
        { tag: 'script', attrs: { src: 'https://skulpt.org/js/skulpt.min.js', defer: true } },
        { tag: 'script', attrs: { src: 'https://skulpt.org/js/skulpt-stdlib.js', defer: true } },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
        { label: 'Lektion 1 – Rumskibet', items: [{ autogenerate: { directory: 'lektion-1-rumskibet' } }] },
        { label: 'Lektion 2 – Skyd!', items: [{ autogenerate: { directory: 'lektion-2-skyd' } }] },
        { label: 'Lektion 3 – Asteroider', items: [{ autogenerate: { directory: 'lektion-3-asteroider' } }] },
        { label: 'Lektion 4 – Game over og point', items: [{ autogenerate: { directory: 'lektion-4-game-over-og-point' } }] },
        { label: 'Lektion 5 – Liv og skjold', items: [{ autogenerate: { directory: 'lektion-5-liv-og-skjold' } }] },
        { label: 'Lektion 6 – Rumfysik', items: [{ autogenerate: { directory: 'lektion-6-rumfysik' } }] },
        { label: 'Lektion 7 – Gør det til dit eget', items: [{ autogenerate: { directory: 'lektion-7-goer-det-til-dit-eget' } }] },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkPythonRun],
      rehypePlugins: [rehypeExternalLinks],
    }),
  },
})
