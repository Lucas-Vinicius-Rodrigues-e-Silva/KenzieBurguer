import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;

  > button {
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: fit-content;
    height: 50%;
    color: var(--color-grey-0);
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    margin-right: 20px;
    transition: 0.25s;
    cursor: pointer;
  }

  > button:hover {
    transition: 0.25s;
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
  }

  > input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    border: 2px solid transparent;
    border-radius: 8px;
    width: 23.8%;
    height: 8%;
    position: absolute;
  }
  @media (max-width: 1320px) {
    min-width: 50%;
    justify-content: center;
    > input {
      width: 60%;
      min-width: 110%;
      height: 50%;
      position: unset;
    }
    > button {
      z-index: 0;
      margin:unset;
    }
  }
`;
