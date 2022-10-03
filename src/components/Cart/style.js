import styled from "styled-components";

export const CartUl = styled.ul`
  list-style: none;
  width: 30%;
  height: 70%;
  overflow-y: scroll;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-grey-0);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-20);
    border-radius: 20px;
  }

  .cart-tittle {
    display: flex;
    min-height: 15%;
    border: 2px solid green;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);
    color: white;
  }

  .cart-tittle > p {
    margin-left: 1rem;
    font-weight: 700;
    font-size: 18px;
  }

  .total-money {
    position: fixed;
    background-color: var(--color-grey-0);
    bottom: 40px;
    width: 24%;
    height: 18%;
    border-top: 2px solid var(--color-grey-20);
    border-radius: 0px 0px 5px 5px;
  }

  @media (max-width: 1320px) {
    width: 100%;
    min-height: 80%;
    margin-top: 10rem;

    .total-money {
      width: 80%;
      bottom: 70px;
      position: absolute;
    }
  }
`;
