import { POSITIONS, MOVE_DIRECTIONS } from '~/stores/map/index.constants'

const userPosition = {
  [POSITIONS.X]: 5,
  [POSITIONS.Y]: 5
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

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

  return { data: userPosition }
})
