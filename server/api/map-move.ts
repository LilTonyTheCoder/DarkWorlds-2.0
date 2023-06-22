import { myMapArray } from './my-map'
import { POSITIONS, MOVE_DIRECTIONS } from '~/stores/map/index.constants'

export const AREAS_WITH_NO_INTERACTION = {
  ground: 'ground'
}

export const userPosition = {
  [POSITIONS.X]: 5,
  [POSITIONS.Y]: 5
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  /** Moving user */
  switch (body) {
    case MOVE_DIRECTIONS.TOP:
      userPosition[POSITIONS.Y] -= 1
      break
    case MOVE_DIRECTIONS.LEFT:
      userPosition[POSITIONS.X] -= 1
      break
    case MOVE_DIRECTIONS.RIGHT:
      userPosition[POSITIONS.X] += 1
      break
    case MOVE_DIRECTIONS.BOTTOM:
      userPosition[POSITIONS.Y] += 1
      break
  }

  /** Getting interaction area name */
  const X = userPosition[POSITIONS.X]
  const Y = userPosition[POSITIONS.Y]

  const currentArea = myMapArray[Y][X]

  let interactiveArea = null
  if (!AREAS_WITH_NO_INTERACTION[currentArea.area]) {
    interactiveArea = currentArea.name ? currentArea.name : currentArea.area
  }

  return {
    data: {
      coordinates: userPosition,
      interactiveArea
    }
  }
})
