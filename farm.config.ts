import type { UserConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import farmJsPluginSass from "@farmfe/js-plugin-sass";
import farmJsPluginPostcss from "@farmfe/js-plugin-postcss";
import path from "path";
function defineConfig(config: UserConfig) {
  return config;
}

export default defineConfig({
  server: {
    port: 9001,
    open: true,
  },
  compilation: {
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "src"),
      },
    },
    external: ["uno.css"],
    output: {
      publicPath: "/test/",
      filename: "static/[ext]/[resourceName].[hash].[ext]",
      assetsFilename: "static/[ext]/[resourceName].[hash].[ext]",
    },
  },
  plugins: [
    farmJsPluginSass(),
    farmJsPluginPostcss({
      /* options */
    }),
  ],
  vitePlugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
