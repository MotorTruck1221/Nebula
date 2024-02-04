// vite.config.ts
import million from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/million@2.6.4/node_modules/million/dist/packages/compiler.mjs";
import { defineConfig } from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/vite@5.0.9/node_modules/vite/dist/node/index.js";
import preact from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/@preact+preset-vite@2.7.0_@babel+core@7.23.6_preact@10.19.3_vite@5.0.9/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import { viteStaticCopy } from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/vite-plugin-static-copy@1.0.0_vite@5.0.9/node_modules/vite-plugin-static-copy/dist/index.js";
import { uvPath } from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/@nebula-services+ultraviolet@1.0.1-1.patch.7/node_modules/@nebula-services/ultraviolet/lib/index.cjs";
import { dynamicPath } from "file:///home/tuckerj/code/proxies/neb-fork/node_modules/.pnpm/@nebula-services+dynamic@0.7.2-patch.2/node_modules/@nebula-services/dynamic/bin/index.cjs";
import path from "path";
var __dirname = path.resolve();
console.log(dynamicPath);
var vite_config_default = defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          // .replace fixes weird paths on Windows
          src: `${uvPath}/uv.*.js`.replace(/\\/g, "/"),
          dest: "uv",
          overwrite: false
        },
        {
          // .replace fixes weird paths on Windows
          src: `${dynamicPath}/dynamic.*.js`.replace(/\\/g, "/"),
          dest: "dynamic",
          overwrite: false
        },
        {
          src: `${__dirname}/node_modules/localforage/dist/localforage.*.js`.replace(
            /\\/g,
            "/"
          ),
          dest: "localforage",
          overwrite: false
        }
      ]
    }),
    million.vite({ auto: true }),
    preact()
  ],
  server: {
    proxy: {
      "/bare": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/bare/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90dWNrZXJqL2NvZGUvcHJveGllcy9uZWItZm9ya1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdHVja2Vyai9jb2RlL3Byb3hpZXMvbmViLWZvcmsvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdHVja2Vyai9jb2RlL3Byb3hpZXMvbmViLWZvcmsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgbWlsbGlvbiBmcm9tIFwibWlsbGlvbi9jb21waWxlclwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcHJlYWN0IGZyb20gXCJAcHJlYWN0L3ByZXNldC12aXRlXCI7XHJcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI7XHJcbmltcG9ydCB7IHV2UGF0aCB9IGZyb20gXCJAbmVidWxhLXNlcnZpY2VzL3VsdHJhdmlvbGV0XCI7XHJcbmltcG9ydCB7IGR5bmFtaWNQYXRoIH0gZnJvbSBcIkBuZWJ1bGEtc2VydmljZXMvZHluYW1pY1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLnJlc29sdmUoKTtcclxuXHJcbmNvbnNvbGUubG9nKGR5bmFtaWNQYXRoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xyXG4gICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gLnJlcGxhY2UgZml4ZXMgd2VpcmQgcGF0aHMgb24gV2luZG93c1xyXG4gICAgICAgICAgc3JjOiBgJHt1dlBhdGh9L3V2LiouanNgLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpLFxyXG4gICAgICAgICAgZGVzdDogXCJ1dlwiLFxyXG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gLnJlcGxhY2UgZml4ZXMgd2VpcmQgcGF0aHMgb24gV2luZG93c1xyXG4gICAgICAgICAgc3JjOiBgJHtkeW5hbWljUGF0aH0vZHluYW1pYy4qLmpzYC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKSxcclxuICAgICAgICAgIGRlc3Q6IFwiZHluYW1pY1wiLFxyXG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBgJHtfX2Rpcm5hbWV9L25vZGVfbW9kdWxlcy9sb2NhbGZvcmFnZS9kaXN0L2xvY2FsZm9yYWdlLiouanNgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIC9cXFxcL2csXHJcbiAgICAgICAgICAgIFwiL1wiXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgZGVzdDogXCJsb2NhbGZvcmFnZVwiLFxyXG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgICBtaWxsaW9uLnZpdGUoeyBhdXRvOiB0cnVlIH0pLFxyXG4gICAgcHJlYWN0KClcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvYmFyZVwiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2JhcmUvLCBcIlwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUixPQUFPLGFBQWE7QUFDL1MsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBQ25CLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMsY0FBYztBQUN2QixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLFVBQVU7QUFDakIsSUFBTSxZQUFZLEtBQUssUUFBUTtBQUUvQixRQUFRLElBQUksV0FBVztBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsVUFFRSxLQUFLLEdBQUcsTUFBTSxXQUFXLFFBQVEsT0FBTyxHQUFHO0FBQUEsVUFDM0MsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLEtBQUssR0FBRyxXQUFXLGdCQUFnQixRQUFRLE9BQU8sR0FBRztBQUFBLFVBQ3JELE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSyxHQUFHLFNBQVMsa0RBQWtEO0FBQUEsWUFDakU7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssQ0FBQztBQUFBLElBQzNCLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxXQUFXLEVBQUU7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
