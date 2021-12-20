import { FC, memo, useEffect, useRef } from 'react'

export interface ListItem {
  id: number
}

export interface ListCreatorProps {
  listItems?: Array<ListItem>
}

/**
 * React.memo only allows component updates if the props passed in have changed.
 * Therefore we get a small performance benefit.
 * If this was a complex object with lots of elements it could make a big difference.
 */

export const ListCreator: FC<ListCreatorProps> = memo((props: ListCreatorProps) => {
  const { listItems } = props
  let renderItems = useRef<Array<JSX.Element> | undefined>()

  useEffect(() => {
    renderItems.current = listItems?.map((item, index) => {
      return <div key={item.id}>{item.id}</div>
    })
  }, [listItems])

  return <>{renderItems.current}</>
})
