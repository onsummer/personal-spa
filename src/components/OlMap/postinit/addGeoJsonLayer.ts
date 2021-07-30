import { Map } from "ol"
import { Vector as VectorSource } from "ol/source"
import { Vector as VectorLayer } from "ol/layer"
import { GeoJSON } from 'ol/format'
import { Style, Fill, Stroke } from "ol/style"

export const addGeoJsonLayer = async (map: Map) => {
  const chinafullResp = await fetch('/static/china_full.json')
  const chinafull = await chinafullResp.json()
  const vectorSource = new VectorSource({
    features: new GeoJSON({
      featureProjection: 'EPSG:3857'
    }).readFeatures(chinafull)
  })
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: new Style({
      stroke: new Stroke({
        color: 'rgba(83, 196, 212, 0.9)',
        width: 1,
      }),
      fill: new Fill({
        color: 'rgba(83, 196, 212, 0.1)',
      }),
    })
  })
  map.addLayer(vectorLayer)
  map.getView().setZoom(4)
  map.getView().setCenter([12151747.90107185, 3768378.152452517])
}