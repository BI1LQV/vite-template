/// <reference types="vitest" />

import path from "node:path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Unocss from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import BuildInfo from "unplugin-info/vite"
import Inspect from "vite-plugin-inspect"

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    BuildInfo(),
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      importMode(_filepath, _options) {
        return "sync"
      },
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    AutoImport({
      resolvers: [NaiveUiResolver()],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dirs: [],
    }),
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom",
  },
})
