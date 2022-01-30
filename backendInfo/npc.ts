import { BackEnemy, UniqEnemyParams, FullEnemyParams } from '~/typings/enemies'

import city_1_enemies from './npc/city_1' // 1000 - 1005

export const currentMapEnemies: Record<string, UniqEnemyParams> = {
  '16af9497d': { prototype: 1000, defaultPosition: {x: 5, y: 5}, currentPosition: {x: 8, y: 5} },
  'e9354f8do': { prototype: 1000, defaultPosition: {x: 5, y: 5}, currentPosition: {x: 7, y: 5} },
  '622a7e0es': { prototype: 1000, defaultPosition: {x: 6, y: 5}, currentPosition: {x: 7, y: 5} },
}

export const prototypes: Record<number, BackEnemy> = {
  ...city_1_enemies,
}

export const getEnemiesListByCoordinate = (coordinate: { x: number, y: number }): Record<string, FullEnemyParams> => {
  const allEnemiesObj: Partial<Record<string, FullEnemyParams>> = JSON.parse(JSON.stringify(currentMapEnemies))

  Object.keys(allEnemiesObj).map(enemyId => {
    if (
      allEnemiesObj[enemyId].currentPosition.x !== coordinate.x ||
      allEnemiesObj[enemyId].currentPosition.y !== coordinate.y
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
