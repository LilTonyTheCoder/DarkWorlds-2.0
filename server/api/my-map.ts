export type PossibleAreas =
  'empty' |
  'shop' |
  'port' |
  'ground' |
  'library' |
  'circle' |
  'exclusive-shop' |
  'shield' |
  'cleaning' |
  'beer' |
  'star' |
  'key' |
  'dollar' |
  'hat' |
  'battle' |
  'clothes' |
  'ring' |
  'sword'

type PossibleMoves = 'r' | 'b' | 't' | 'l'

export type MapSector = {
  area: PossibleAreas
  possibleMoves?: PossibleMoves[]
  name?: string
  description?: string
  img?: string
}

export const myMapArray: MapSector[][] = [
  [
    { area: 'empty' }, { area: 'empty' }, { area: 'shop', possibleMoves: ['b'] }, { area: 'shop', possibleMoves: ['b'] }, { area: 'port', possibleMoves: ['r'] }, { area: 'ground', possibleMoves: ['l', 'r', 'b'] }, { area: 'port', possibleMoves: ['l'] }, { area: 'library', possibleMoves: ['b'] }, { area: 'library', possibleMoves: ['b'] }, { area: 'ground', possibleMoves: ['b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['r', 'b'] }, { area: 'ground' }, { area: 'ground' }, { area: 'ground', possibleMoves: ['l', 'r'] }, { area: 'ground' }, { area: 'ground', possibleMoves: ['l', 'r'] }, { area: 'ground' }, { area: 'ground' }, { area: 'ground', possibleMoves: ['t', 'l', 'b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'r', 'b'] }, { area: 'circle', possibleMoves: ['t', 'l'] }, { area: 'circle', possibleMoves: ['t'] }, { area: 'shop', possibleMoves: ['r'] }, { area: 'ground' }, { area: 'exclusive-shop', possibleMoves: ['l'] }, { area: 'ground', possibleMoves: ['t', 'b'] }, { area: 'circle', possibleMoves: ['t', 'r'] }, { area: 'ground', possibleMoves: ['t', 'l', 'b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'b'] }, { area: 'library', possibleMoves: ['b'] }, { area: 'shop', possibleMoves: ['b'] }, { area: 'sword', possibleMoves: ['b', 'r'] }, { area: 'ground' }, { area: 'shield', possibleMoves: ['l', 'b'] }, { area: 'cleaning', possibleMoves: ['t'] }, { area: 'circle', possibleMoves: ['r'] }, { area: 'ground', possibleMoves: ['t', 'l', 'b'] }, { area: 'empty' }
  ], [
    { area: 'ground', possibleMoves: ['r'] }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'beer', possibleMoves: ['l', 'b'] }, { area: 'shop', possibleMoves: ['b'] }, { area: 'ground', possibleMoves: ['t', 'b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'b'] }, { area: 'shop', possibleMoves: ['t'] }, { area: 'ground', possibleMoves: ['t', 'r'] }, { area: 'ground' }, { area: 'star', name: 'Healing Star', description: 'Here you can refill your mana and health', img: 'healing-star.jpeg' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'ground', possibleMoves: ['l'] }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'r', 'b'] }, { area: 'ground', possibleMoves: ['l'] }, { area: 'key', possibleMoves: ['r'] }, { area: 'ground' }, { area: 'ground' }, { area: 'ground' }, { area: 'dollar', possibleMoves: ['t', 'l'] }, { area: 'hat', possibleMoves: ['t'] }, { area: 'ground', possibleMoves: ['t', 'b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'r', 'b'] }, { area: 'ground', possibleMoves: ['l', 'r'] }, { area: 'battle', possibleMoves: ['l', 'b'] }, { area: 'clothes', possibleMoves: ['t', 'r'] }, { area: 'ground' }, { area: 'ring', possibleMoves: ['t', 'l'] }, { area: 'battle', possibleMoves: ['b'] }, { area: 'battle', possibleMoves: ['b', 'r'] }, { area: 'ground', possibleMoves: ['t', 'l', 'b'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'ground', possibleMoves: ['t', 'r'] }, { area: 'ground', possibleMoves: ['l', 'r', 'b'] }, { area: 'ground' }, { area: 'ground', possibleMoves: ['l', 'r', 'b'] }, { area: 'ground' }, { area: 'ground', possibleMoves: ['l', 'r', 'b'] }, { area: 'ground' }, { area: 'ground' }, { area: 'ground', possibleMoves: ['t', 'l'] }, { area: 'empty' }
  ], [
    { area: 'empty' }, { area: 'empty' }, { area: 'shop', possibleMoves: ['t', 'r'] }, { area: 'shop', possibleMoves: ['l', 't', 'r'] }, { area: 'shop', possibleMoves: ['l', 't'] }, { area: 'ground', possibleMoves: ['t'] }, { area: 'shop', possibleMoves: ['t', 'r'] }, { area: 'shop', possibleMoves: ['l', 't', 'r'] }, { area: 'shop', possibleMoves: ['l', 't'] }, { area: 'empty' }, { area: 'empty' }
  ]
]
export default defineEventHandler((event) => {
  return {
    data: myMapArray
  }
})
