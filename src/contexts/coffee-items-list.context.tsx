import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

export type TCoffeeItem = {
  id: number
  name: string
  tags: string[]
  description: string
  cost: number
  imageUrl: string
}

type TCoffeeItemContext = {
  coffeeItems: TCoffeeItem[]
  getCoffeeItemFromId: (coffeeId: number) => TCoffeeItem
}

export const CoffeeItemListContext = createContext<TCoffeeItemContext>(
  {} as TCoffeeItemContext
)

type TCoffeeItemListContextProps = {
  children: ReactNode
}

export function CoffeeItemListContextProvider({
  children
}: TCoffeeItemListContextProps): JSX.Element {
  const [coffeeItems, setCoffeeList] = useState<TCoffeeItem[]>([])
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const data = await fetch('/data/coffees.json')
      setCoffeeList(await data.json())
    }
    fetchData()
      .then()
      .catch((e) => console.log(e))
  }, [])

  function getCoffeeItemFromId(coffeeId: number): TCoffeeItem | undefined {
    const coffeeItem = coffeeItems.find((coffeeI) => coffeeI.id === coffeeId)
    return coffeeItem
  }
  return (
    <CoffeeItemListContext.Provider
      value={{ coffeeItems, getCoffeeItemFromId }}
    >
      {children}
    </CoffeeItemListContext.Provider>
  )
}

export function useCoffeeItems(): TCoffeeItemContext {
  const { coffeeItems, getCoffeeItemFromId } = useContext(CoffeeItemListContext)
  return { coffeeItems, getCoffeeItemFromId }
}
