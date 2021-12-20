import { FC } from 'react'

interface PropertiesProps {
  name: string
  description: string
}

export const Properties: FC<PropertiesProps> = props => {
  const { name, description } = props
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
    </>
  )
}
