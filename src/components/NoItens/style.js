import styled from "styled-components";

export const WhitoutItens = styled.div`
  width: 30%;
  height: 30%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);

  @media (max-width: 1320px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .cart-tittle {
    display: flex;
    height: 40%;
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

  .empity-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-0);
    width: 100%;
    height: 75%;
  }

  .empity-description > p {
    color: var(--color-grey-100);
    font-weight: 700;
    font-size: 18px;
  }

  .empity-description > span {
    margin-top: 1rem;
    color: var(--color-grey-50);
    font-weight: 400;
    font-size: 14px;
  }
`;
