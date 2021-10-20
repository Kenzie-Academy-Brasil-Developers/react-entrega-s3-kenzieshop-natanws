import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  height: 100vh;
  align-items: center;
`;

export const TitleContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  background: #4b4bc4;
  color: white;

  a {
    font-weight: 700;
    font-size: 1.4rem;
    color: white;
  }

  img {
    width: 25px;
  }
`;

export const ContentContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 85%;
  
`;

export const CartProducts = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  overflow: auto;
  background-color: white;
  border-radius: 10px;
  width: 500px;

  h2 {
    padding-top: 25px;
  }

  button {
    width: 150px;
    background: none;
    border-radius: 15px;
    padding: 5px 6px;

    &:hover {
      background-color: #c95c5c;
      color: white;
    }
  }
`;