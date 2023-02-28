import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Icons({
      autoInstall: true
    }),
    Inspect()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      views: path.resolve(__dirname, "./src/views"),
      components: path.resolve(__dirname, "./src/components")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/common.scss";'
      }
    }
  },
  server: {
    open: true,
    port: 1987,
    host: '0.0.0.0'
  }
})
