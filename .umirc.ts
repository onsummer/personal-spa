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
  // antd: false
})
