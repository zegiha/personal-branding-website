import {InterfaceFlex} from '../type'
import {Flex} from './flex'

export function Col(props: Omit<InterfaceFlex, 'flexDirection'>) {
  return <Flex
    flexDirection={'col'}
    {...props}
  />
}