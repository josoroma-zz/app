import { useReducer, useCallback, useState, useEffect } from 'react'
import { Input, ListCreator, ListItem } from '../../components'

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'inputValue':
      if (state.inputValue === action.payload) {
        return state
      }
      return { ...state, inputValue: action.payload }
    case 'message':
      return { ...state, message: `Value: ${action.payload}` }
    default:
      throw new Error('Invalid action type ' + action.type)
  }
}

const inputInitialState = {
  inputValue: '',
  message: '',
}

export const HomeContainer = () => {
  // State - Via Reducers
  const [{ message, inputValue }, inputDispatch] = useReducer(inputReducer, inputInitialState)

  // State - Via useState
  const [startCount, setStartCount] = useState(0)
  const [count, setCount] = useState(0)

  // Functions
  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount
    setCount(inc)
  }, [count, startCount])

  // Events
  const onClickCount = () => setCountCallback()

  // Functions as Props
  const onChangeStartCountAsProp = (e: React.ChangeEvent<HTMLInputElement>) => setStartCount(Number(e.target.value))

  const [listItems, setListItems] = useState<Array<ListItem>>()

  useEffect(() => {
    setCount(startCount)
    setListItems([])
  }, [startCount])

  useEffect(() => {
    const li = []
    for (let i = 0; i < count + 1; i++) {
      li.push({ id: i })
    }
    setListItems(li)
  }, [count])

  return (
    <div className="HomeContainer">
      <h2>Home (Container and Presentational components)</h2>
      <div>
        <Input inputName="name" inputValue={inputValue} message={message} inputDispatcher={inputDispatch} />
        <div>
          <label>Enter a number:</label>
          <input value={startCount} onChange={onChangeStartCountAsProp} style={{ margin: '.55rem', width: '.55rem' }} />
          <label>{count}</label>
          <button onClick={onClickCount} style={{ margin: '.55rem' }}>
            Increment
          </button>
        </div>
        <div>
          <ListCreator listItems={listItems} />
        </div>
      </div>
    </div>
  )
}
