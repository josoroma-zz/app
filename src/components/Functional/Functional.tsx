import { FC } from 'react'

interface FunctionalProps {
  name: string
}

export const Functional: FC<FunctionalProps> = props => <>{props.name}</>
