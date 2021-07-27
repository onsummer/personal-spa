import { Map } from 'ol'
import { Effect, Reducer } from 'umi'

export enum GISEngineType {
  Mapbox,
  Openlayers,
  Cesium,
  NotLoaded
}

export interface SystemModelState {
  currentEngine: GISEngineType
  map?: Map
  isMapInit: boolean
}

export interface SystemModelAction {
  type: string
  payload: any
}

export interface SystemModelType {
  namespace: string
  state: SystemModelState
  effects: {
    [key: string]: Effect
  }
  reducers: {
    save: Reducer<SystemModelState, SystemModelAction>
  }
}

const SystemModel: SystemModelType = {
  namespace: 'system',
  state: {
    currentEngine: GISEngineType.NotLoaded,
    map: undefined,
    isMapInit: false
  },
  effects: {},
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}

export default SystemModel
