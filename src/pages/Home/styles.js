import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  height: 100vh;
  align-items: center;
`;

export const TitleContainer = styled.div`
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

export const ContentContainer = styled.div`
  width: 70%;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 40%;
  background-color: white;
  min-height: 90vh;
  overflow: auto;

  h2 {
    width: 100%;
    text-align: center;
  }
  button {
    width: 150px;
    background: none;
    border-radius: 15px;
    padding: 5px 6px;

    &:hover {
      background-color: #56ad5d;
      color: white;
    }
  }
`;
