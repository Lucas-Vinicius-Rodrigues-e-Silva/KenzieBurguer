import styled from "styled-components";

export const AllItens = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(90% / 3);
  height: calc(95% / 2);
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;
  transition: 0.25s;

  :hover {
    border: 2px solid var(--color-grey-100);
    cursor: pointer;
    transition: 0.25s;
  }

  > img {
    object-fit: scale-down;
    height: 50%;
    width: 100%;
    background-color: var(--color-grey-0);
  }

  > h2 {
    display: flex;
    justify-content: flex-start;
    margin-left: 1rem;
    width: 86%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
  }

  > p {
    margin-left: 1rem;
    color: var(--color-grey-50);
    font-size: 12px;
  }

  > span {
    margin-left: 1rem;
    color: var(--color-primary);
  }

  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    margin-left: 1rem;
    background-color: var(--color-primary);
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    outline: none;
    color: var(--color-grey-0);
    cursor: pointer;
    transition: 0.25s;
    margin-bottom: 1rem;
  }

  > button:hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
    transition: 0.25s;
  }

  @media (max-width: 1320px) {
    min-width: 100%;
    height: 90%;
    align-items: center;
    margin-right: 2rem;

    > h2 {
      max-width: 45%;
      margin:0;
    }
  }

`;
