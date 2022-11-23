import styled from 'styled-components'

export const AddOrRemoveItemContainer = styled.div`
  height: 2rem;
  width: 4.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  span {
    display: flex;
    height: 100%;
    align-items: center;
    color: ${(props) => props.theme.baseTitle};
  }
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.purple500};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.purple700};
    }
  }
`
