import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 500px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    height: 50px;
    background: none;
    border-radius: 25px;
    padding: 5px 6px;

    &:hover {
      background-color: #58b364;
      color: white;
    }
  }

  hr {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  .contentTitle {
    font-size: 1.7rem;
    font-weight: 900;
  }
`;
