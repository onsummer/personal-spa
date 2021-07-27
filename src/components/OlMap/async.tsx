import { dynamic } from 'umi'

export default dynamic({
  loading: () => <div>Loading ... </div>,
  loader: async () => {
    const { default: component } = await import(
      /* webpackChunkName: "async_olmap" */ "@/components/OlMap/index"
    )
    return component
  }
})