export enum PossibleMapSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}

export const MapSizes: Record<PossibleMapSizes, number> = {
  [PossibleMapSizes.SMALL]: 20,
  [PossibleMapSizes.MEDIUM]: 30,
  [PossibleMapSizes.BIG]: 40,
}

export const MapSizesTitles: Record<PossibleMapSizes, string> = {
  [PossibleMapSizes.SMALL]: '0.5',
  [PossibleMapSizes.MEDIUM]: '1',
  [PossibleMapSizes.BIG]: '1.5',
}
