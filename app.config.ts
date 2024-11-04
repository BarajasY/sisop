import { defineConfig } from "@solidjs/start/config";
import { presetIcons } from "unocss";
import UnocssVitePlugin from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [UnocssVitePlugin({
      presets: [
        presetIcons()
      ]
    })]
  }
});
