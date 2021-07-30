import { Map } from "ol";

export const showMapStatus = (map: Map) => {
  const view = map.getView()
  console.log(view)
}