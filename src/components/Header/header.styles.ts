import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 0;
  margin-bottom: 2.5rem;
`
export const NavHeader = styled.nav`
  display: flex;
  gap: 0.75rem;
  button {
    border: none;
    padding: 0.5rem;
    background: ${(props) => props.theme.purple300};
    color: ${(props) => props.theme.purple700};
    font-size: 0.875rem;

    svg {
      color: ${(props) => props.theme.purple500};
    }
  }
  a {
    width: 2.375rem;
    background: ${(props) => props.theme.yellow300};
    color: ${(props) => props.theme.yellow700};
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }

  & > * {
    height: 2.375rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
  }
  position: relative;
`

export const NumberProductsStatus = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  position: absolute;
  right: -10px;
  top: -10px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  background: ${(props) => props.theme.yellow500};
`
