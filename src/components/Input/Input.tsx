import { FC } from 'react'

interface InputProps {
  inputValue: string
  inputName: string
  message: string
  inputDispatcher: React.Dispatch<{ type: string; payload: string }>
}

export const Input: FC<InputProps> = props => {
  const { inputName, inputValue, message, inputDispatcher } = props

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target

    inputDispatcher({ type: 'inputValue', payload: inputValue })
    inputDispatcher({ type: 'message', payload: inputValue })
  }

  return (
    <div style={{ margin: '.55rem' }}>
      <input value={inputValue} onChange={onChangeValue} name={inputName} />
      <div style={{ margin: '.75rem' }}>{message}</div>
    </div>
  )
}
