import { MapBrowserEvent } from 'ol'
import { toLonLat } from 'ol/proj'
import { useEffect, useState } from 'react'
import { GISEngineType, SystemModelState, useSelector } from 'umi'

import LonLatBar from './LonLatBar'

interface DefaultRootState {
  system: SystemModelState
}

import styles from './index.less'

export default (props: any) => {
  const {
    currentEngine,
    map
  } = useSelector((state: DefaultRootState) => state.system)

  const [lonlat, setLonLat] = useState<number[]>([])

  const onPointerMoveHandler = (e: any) => {
    const _e = e as MapBrowserEvent<MouseEvent>
    const lonlat = toLonLat(_e.coordinate)
    if (lonlat) {
      setLonLat(lonlat)
    }
  }

  useEffect(() => {
    if (currentEngine === GISEngineType.Openlayers) {
      map?.on("pointermove", onPointerMoveHandler)
    }
    else {
      map?.removeEventListener("pointermove", onPointerMoveHandler)
    }
  }, [currentEngine, map])

  return <div className={styles.statusBar}>
    <LonLatBar lon={lonlat[0]} lat={lonlat[1]}></LonLatBar>
  </div>
}