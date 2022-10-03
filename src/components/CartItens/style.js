import styled from "styled-components";

export const InCartItens = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 22%;
  margin-bottom: 1rem;

  > img {
    object-fit: scale-down;
    height: 70%;
    width: 25%;
    background-color: var(--color-grey-20);
    border-radius: 5px;
  }

  > h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40%;
    width: 34%;
    color: var(--color-grey-100);
    text-overflow: inherit;
    overflow: hidden;
    white-space: nowrap;
  }

  > p {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 50%;
    width: fit-content;
    color: var(--color-grey-40);
  }

  > button {
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    height: 62%;
    background: transparent;
    border: none;
    color: var(--color-grey-40);
    cursor: pointer;
  }
  > button:hover {
    color: var(--color-grey-100);
  }
`;
