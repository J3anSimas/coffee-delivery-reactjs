import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`

export const IntroContainer = styled.header`
  display: flex;
  img {
    flex: 1;
  }
`

export const IntroFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const IntroItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`
export const IntroItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.white};
    display: flex;
  }
  span:has(svg) {
    padding: 8px;
    border-radius: 50%;
  }
  & .cartItem {
    background: ${(props) => props.theme.yellow700};
  }
  & .packageItem {
    background: ${(props) => props.theme.baseText};
  }
  & .timerItem {
    background: ${(props) => props.theme.yellow500};
  }
  & .coffeeItem {
    background: ${(props) => props.theme.purple500};
  }
`
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2', san-serif;
  }
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  row-gap: 2.5rem;
`
