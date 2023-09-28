import { FactoryArg, createMask } from 'imask'

export interface MaskProps {
  value: string
  unmaskedValue: string
}

/**
 * Mask a string into a IMask pattern
 * @param value string that will be masked
 * @param masks 0 as Digit, a as Letter, * as Any, [] as Optional, {} as Fixed
 * @returns value and unmaskedValue
 */
const mask = (mask: FactoryArg, value: string = ''): MaskProps => {
  const masked = createMask(mask)
  masked.resolve(value)
  return masked
}

export default mask
