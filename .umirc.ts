import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  /** 启用按需加载 */
  dynamicImport: {},
  /** 启用 webpack5 */
  webpack5: {},
  /** 启用 esbuild */
  // esbuild: {}
  /** 不使用 antdesign */
  // antd: false,
  title: 'Suki Ruga',
  favicon: '/logo.webp',
  proxy: {
    '/static': {
      // 例如，请求 /static/data.json 实际上是请求了 https://aiyoo.asia/static/data.json
      target: 'https://aiyoo.asia/',
      changeOrigin: true
    },
    '/cdnstatic': {
      target: 'https://aiyoo.asia/',
      changeOrigin: true
    }
  },
  devServer: {
    https: true,
    compress: true
  }
})
