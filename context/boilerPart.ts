import { IBoilerPart } from '@/types/boilerParts'
import { createDomain } from 'effector'

const boilerPart = createDomain()

export const setBoilerPart = boilerPart.createEvent<IBoilerPart>()

export const $boilerPart = boilerPart
  .createStore<IBoilerPart>({} as IBoilerPart)
  .on(setBoilerPart, (_, boilerPart) => boilerPart)
