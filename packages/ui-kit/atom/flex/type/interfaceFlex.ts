import {TypeWidth} from 'design-kit'
import {ComponentPropsWithoutRef} from 'react'

export type InterfaceFlex = {
  flexDirection?: 'row' | 'col'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  alignItems?: 'start' | 'center' | 'end'
  gap?: number | string
  wrap?: boolean
  flexGrow?: number | string
  flexShrink?: number | string
  width?: TypeWidth
} & ComponentPropsWithoutRef<'div'>