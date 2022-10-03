import styled from "styled-components";

export const TotalPriceComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height: 100%;

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 95%;
    background-color: var(--color-grey-0);
  }

  .total > p {
    color: var(--color-grey-100);
  }

  .total > span {
    color: var(--color-grey-50);
  }

  .remove-all-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
  }

  .remove-all-btn > button {
    width: 95%;
    height: 80%;
    background-color: var(--color-grey-20);
    border: none;
    color: var(--color-grey-50);
    border-radius: 8px;
    cursor: pointer;
  }

  .remove-all-btn > button:hover {
    color: var(--color-grey-0);
    background-color: var(--color-grey-50);
  }
`;
