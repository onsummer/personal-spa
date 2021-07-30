import { useEffect } from 'react'
import styles from './index.less'
import OlMap from '@/components/OlMap/async'
import StatusBar from '@/components/StatusBar'
import { showMapStatus } from '@/tools/olDebug'
import { useSelector } from 'umi'
import { DefaultRootState } from '@/typings'

declare global {
  interface Window {
    debugOl?: Function
  }
}

export default (props: any) => {
  const { map, isMapInit } = useSelector((state: DefaultRootState) => state.system)
  const { match } = props
  const { params } = match

  useEffect(() => {
    window.debugOl = () => {
      if (map)
        showMapStatus(map)
    }

    return () => {
      window.debugOl = undefined
    }
  }, [isMapInit])

  return <div className={styles.olRoute}>
    <OlMap></OlMap>
    <StatusBar></StatusBar>
  </div>
}