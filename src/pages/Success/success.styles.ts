import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`

export const HeaderContainer = styled.header`
  width: 100%;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.yellow700};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const DeliveryAddressAndImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const DeliveryAddressInfo = styled.article`
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.baseText};
  background-clip: padding-box;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      ${(props) => `${props.theme.yellow500}, ${props.theme.purple500}`}
    );
  }
  & .info-item {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: 100%;

    & .svg-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      svg {
        color: ${(props) => props.theme.white};
      }
    }

    & .svg-container[data-type='map'] {
      background: ${(props) => props.theme.purple500};
    }
    & .svg-container[data-type='timer'] {
      background: ${(props) => props.theme.yellow500};
    }
    & .svg-container[data-type='currency'] {
      background: ${(props) => props.theme.yellow700};
    }

    & .bold {
      font-weight: bold;
    }
  }
`
