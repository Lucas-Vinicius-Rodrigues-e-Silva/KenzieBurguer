import styled from "styled-components";

export const SectionMain = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 85vh;

  @media (max-width: 1320px) {
    > div {
      flex-direction: column;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    height: 100%;
  }

  .main-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 65%;
    margin-top: 2rem;
  }

  @media (max-width: 1320px) {
    .main-list {
      overflow-x: scroll;
      width: 100%;
      flex-wrap: nowrap;
      min-height:60%;
    }
  }
`;
