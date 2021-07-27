/* 
  node_modules & umi
 */
import { MapBrowserEvent } from 'ol'
import { toLonLat } from 'ol/proj'
import { useEffect, useState } from 'react'
import { GISEngineType, useSelector } from 'umi'

/* 
  project components
 */
import LonLatBar from './LonLatBar'

/*
  typings
 */
import { DefaultRootState } from '@/typings'

/*
  styles.
 */
import styles from './index.less'

export default (props: any) => {
  const { currentEngine, map, isMapInit } = useSelector((state: DefaultRootState) => state.system)

  const [lonlat, setLonLat] = useState<number[]>([])

  const onPointerMoveHandler = (e: MapBrowserEvent<MouseEvent>) => {
    const lonlat = toLonLat(e.coordinate)
    if (lonlat) {
      setLonLat(lonlat)
    }
  }

  useEffect(() => {
    if (currentEngine === GISEngineType.Openlayers) {
      map?.on('pointermove', onPointerMoveHandler)
    }
    return () => {
      map?.un('pointermove', onPointerMoveHandler)
    }
  }, [currentEngine, map])

  return (
    <div className={styles.statusBar}>
      <LonLatBar lon={lonlat[0]} lat={lonlat[1]}></LonLatBar>
    </div>
  )
}
