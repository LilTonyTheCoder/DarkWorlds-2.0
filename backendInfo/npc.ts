import { POSITIONS } from '~/constants/creaturesParams'

import { BackEnemy, UniqEnemyParams, FullEnemyParams } from '~/typings/enemies'

import city_1_enemies from './npc/city_1' // 1000 - 1005

export const currentMapEnemies: Record<string, UniqEnemyParams> = {
  '16af9497d': { prototype: 1000, defaultPosition: {[POSITIONS.X]: 5, [POSITIONS.Y]: 5}, currentPosition: {[POSITIONS.X]: 8, [POSITIONS.Y]: 5} },
  'e9354f8do': { prototype: 1000, defaultPosition: {[POSITIONS.X]: 5, [POSITIONS.Y]: 5}, currentPosition: {[POSITIONS.X]: 7, [POSITIONS.Y]: 5} },
  '622a7e0es': { prototype: 1000, defaultPosition: {[POSITIONS.X]: 6, [POSITIONS.Y]: 5}, currentPosition: {[POSITIONS.X]: 7, [POSITIONS.Y]: 5} },
}

export const prototypes: Record<number, BackEnemy> = {
  ...city_1_enemies,
}

export const getEnemiesListByCoordinate = (coordinate: { [POSITIONS.X]: number, [POSITIONS.Y]: number }): Record<string, FullEnemyParams> => {
  const allEnemiesObj: Partial<Record<string, FullEnemyParams>> = JSON.parse(JSON.stringify(currentMapEnemies))

  Object.keys(allEnemiesObj).map(enemyId => {
    if (
      allEnemiesObj[enemyId].currentPosition[POSITIONS.X] !== coordinate[POSITIONS.X] ||
      allEnemiesObj[enemyId].currentPosition[POSITIONS.Y] !== coordinate[POSITIONS.Y]
    ) {
      // Filtering enemies by coordinate
      delete allEnemiesObj[enemyId]
    } else {
      // Extends obj by prototype params
      allEnemiesObj[enemyId] = {
        id: enemyId,
        ...allEnemiesObj[enemyId],
        ...prototypes[allEnemiesObj[enemyId].prototype]
      }
    }
  })

  return allEnemiesObj
}

export const getEnemyByPrototype = (proto: string | string[]): BackEnemy => {
  if (typeof proto === 'string') {
    return prototypes[proto]
  }

  return prototypes[proto[0]]
}
