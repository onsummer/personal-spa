import { useState, useEffect, useRef } from 'react'
import { GISEngineType, useDispatch, useSelector } from 'umi'
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM as OSMSource, Vector as VectorSource } from 'ol/source'
import { fromLonLat } from 'ol/proj'

import { DefaultRootState } from '@/typings'
import { addGeoJsonLayer } from './postinit/addGeoJsonLayer'

import 'ol/ol.css'
import styles from './index.less'

export default (props: any) => {
  const olDivContainerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { map, isMapInit } = useSelector((state: DefaultRootState) => state.system)

  // let map: Map
  useEffect(() => {
    const _map = new Map({
      layers: [
        // new TileLayer({
        //   source: new OSMSource({
        //     attributions: ''
        //   }),
        //   opacity: 0.9
        // })
      ],
      target: olDivContainerRef.current as HTMLElement,
      view: new View({
        center: fromLonLat([110.1536, 22.6307]),
        zoom: 13
      })
    })

    dispatch({
      type: 'system/save',
      payload: {
        currentEngine: GISEngineType.Openlayers,
        map: _map,
        isMapInit: true
      }
    })
  }, [])

  useEffect(() => {
    if (map && isMapInit) {
      addGeoJsonLayer(map)
    }
  }, [map, isMapInit])

  return <div ref={olDivContainerRef} className={styles.olMapContainer}></div>
}
