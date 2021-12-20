import { FC, useEffect, useState } from 'react'

interface StateProps {
  name: string
}

export const State: FC<StateProps> = props => {
  const { name } = props

  const [nameState, setMessageState] = useState('')

  useEffect(() => {
    name && setMessageState(`Name: ${name}`)
  }, [name])

  return (
    <>
      <h2>{nameState}</h2>
    </>
  )
}
