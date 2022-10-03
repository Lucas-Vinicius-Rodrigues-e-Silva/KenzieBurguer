import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100vw;
  background-color: var(--color-grey-0);

  .menu-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .home-button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  .tittle {
    color: var(--color-grey-100);
  }

  .tittle-2 {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 400;
    font-size: 18px;
  }

  @media (max-width: 1320px) {
    .menu-container {
      flex-direction: column;
      align-items: center;
      justify-content:center;
    }
  }
`;
