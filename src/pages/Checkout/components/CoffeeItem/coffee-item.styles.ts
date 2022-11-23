import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  width: 23rem;
  display: flex;
  align-items: center;
  padding: 8px 4px;
  /* justify-content: space-between; */
  img {
    width: 4rem;
    height: auto;
    margin-right: 1.25rem;
  }

  & span p {
    color: ${(props) => props.theme.baseSubtitle};
  }

  & span > span {
    display: flex;
    gap: 0.5rem;

    & > button {
      border: none;
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      background: ${(props) => props.theme.baseButton};
      font-size: 0.75rem;
      line-height: 1.6;
      gap: 3px;
      color: ${(props) => props.theme.baseText};
      border-radius: 6px;
      svg {
        color: ${(props) => props.theme.purple500};
      }
      span {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    /* font-size: 18px; */
  }
`
