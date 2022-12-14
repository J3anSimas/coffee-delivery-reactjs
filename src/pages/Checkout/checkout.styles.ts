import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const CompleteOrderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > div {
    border-radius: 6px;
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .container-description {
    display: flex;
    gap: 0.5rem;
    h3 {
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: 400;
    }
    p {
      font-size: 0.875;
      color: ${(props) => props.theme.baseText};
    }

    .container-description-map-pin {
      color: ${(props) => props.theme.yellow500};
    }
    .container-description-currency-dollar {
      color: ${(props) => props.theme.purple500};
    }
  }
  ul {
    display: flex;
    gap: 0.75rem;
    justify-content: space-evenly;
  }
`

export const InputFieldsContainer = styled.div`
  min-width: 35rem;
  display: grid;
  grid-template-areas:
    'a . .'
    'b b b'
    'c d d'
    'e f g';
  grid-auto-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  & input:nth-child(1) {
    grid-area: a;
  }
  & input:nth-child(2) {
    grid-area: b;
  }
  & input:nth-child(3) {
    grid-area: c;
  }
  & input:nth-child(4) {
    grid-area: d;
  }
  & input:nth-child(5) {
    grid-area: e;
  }
  & input:nth-child(6) {
    grid-area: f;
  }
  & input:nth-child(7) {
    grid-area: g;
  }
  /* grid-gap: 0.75rem; */
  input {
    height: 2.625rem;
    width: 100%;
    padding: 0 0.75rem;
    border-radius: 4px;
    border: none;
    color: ${(props) => props.theme.baseText};
    background: ${(props) => props.theme.baseInput};

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.yellow700};
    }
  }
`
type TPaymentTypeCard = {
  name: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}
export const PaymentTypeCard = styled.button<TPaymentTypeCard>`
  padding: 1rem 0;
  flex: 1;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  border: none;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.purple500};
  }
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  &:disabled {
    border: 1px solid ${(props) => props.theme.purple500};
    background: ${(props) => props.theme.purple300};
  }
`

export const SelectedCoffeesAndConfirmContainer = styled.div`
  display: flex;
  max-width: 28rem;
  flex-direction: column;
  gap: 1rem;
  & > div {
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  & .button-confirm-checkout {
    background: ${(props) => props.theme.yellow500};
    width: 100%;
    border: none;
    color: ${(props) => props.theme.white};
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.yellow700};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`

export const SelectedCoffeesList = styled.ul`
  display: grid;
  /* flex-direction: column; */
  gap: 0.75rem;

  & .line-divider {
    border-top: 1px solid ${(props) => props.theme.baseButton};
  }
`
