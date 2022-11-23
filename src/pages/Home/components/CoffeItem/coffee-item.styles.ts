import styled from 'styled-components'

export const CoffeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  background: ${(props) => props.theme.baseCard};
  padding: 1.563rem;
  width: 256px;
  height: 19.375rem;
  text-align: center;
  img {
    margin-top: -50px;
  }
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseSubtitle};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
  }
`

export const CoffeeItemCategories = styled.ul`
  display: flex;
  gap: 5px;
  font-size: 0.625rem;
  font-weight: bold;
  color: ${(props) => props.theme.yellow700};

  & > span {
    height: 1.313rem;
    max-height: 1.313rem;
    padding: 0 7px;
    background: ${(props) => props.theme.yellow300};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const PriceAndOrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Price = styled.span`
  color: ${(props) => props.theme.baseText};
  & .label-price {
    font-size: 0.875rem;
  }
  & .price-value {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
  }
`
export const Order = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  & > span {
    display: flex;
    align-items: center;
    border-radius: 6px;
    background: ${(props) => props.theme.baseButton};
    height: 2.375rem;
    * {
      width: 1.5rem;
      border: none;
      background: transparent;
    }
    span {
      color: ${(props) => props.theme.baseTitle};
      font-size: 1rem;
    }
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.purple500};
    }
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purple500};
    border: none;
    border-radius: 6px;
    height: 2.375rem;
    width: 2.375rem;
  }
`
