export enum POSSIBLE_MAP_SIZES {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}

export const MAP_SIZES_NEW = {
  [POSSIBLE_MAP_SIZES.SMALL]: {
    val: 20,
    title: '0.5'
  },
  [POSSIBLE_MAP_SIZES.MEDIUM]: {
    val: 30,
    title: '1'
  },
  [POSSIBLE_MAP_SIZES.BIG]: {
    val: 40,
    title: '1.5'
  }
}

export enum MOVE_DIRECTIONS {
  TOP = 't',
  LEFT = 'l',
  RIGHT = 'r',
  BOTTOM = 'b',
}

export enum POSITIONS {
  X = 'x',
  Y = 'y',
}
