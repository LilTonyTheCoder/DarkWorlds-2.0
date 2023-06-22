import { userPosition } from '../map-move'
import { myMapArray } from '../my-map'
import { POSITIONS } from '~/stores/map/index.constants'

const X = userPosition[POSITIONS.X]
const Y = userPosition[POSITIONS.Y]

const currentArea = myMapArray[Y][X]

export default defineEventHandler(() => {
  return {
    data: {
      name: currentArea.name || currentArea.area || null,
      description: currentArea.description || null,
      img: currentArea.img || null
    }
  }
})
