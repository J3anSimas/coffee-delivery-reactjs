import styled from 'styled-components'

export const CheckoutDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${(props) => props.theme.baseText};
  & div {
    display: flex;
    justify-content: space-between;
  }
  & .total-description-checkout {
    color: ${(props) => props.theme.baseSubtitle};
    font-weight: bold;
    font-size: 1.25rem;
  }
`
