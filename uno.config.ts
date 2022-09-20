import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1.5 rounded inline-block bg-teal-6 text-white cursor-pointer hover:bg-teal-7 disabled:cursor-default disabled:bg-gray-6 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-6 !outline-none'],
    ['number-btn', 'bg-teal-5 p-1 w-6 h-6 flex items-center justify-center rounded text-teal-9 font-extrabold'],
    ['dashed-link', 'border-neutral-6 border-b border-dotted hover:text-teal-6 dark:hover:text-teal-2'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
