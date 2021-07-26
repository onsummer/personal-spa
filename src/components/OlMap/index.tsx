import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'umi'
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM as OSMSource } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import 'ol/ol.css'
import styles from './index.less'

export default (props: any) => {
  const olDivContainerRef = useRef<HTMLDivElement>(null)
  let map: Map
  useEffect(() => {
    map = new Map({
      layers: [
        new TileLayer({
          source: new OSMSource()
        })
      ],
      target: olDivContainerRef.current as HTMLElement,
      view: new View({
        center: fromLonLat([110.1536, 22.6307]),
        zoom: 13
      })
    })
  }, [])

  return <div ref={olDivContainerRef} className={styles.olMapContainer}>
  </div>
}