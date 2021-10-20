import styled from "styled-components";

export const ProductCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  margin: 50px 30px;
  border: 2px solid #4b4bc4;
  border-radius: 6px;
  padding: 10px;

  span {
    text-align: center;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
    white-space: nowrap;
  }
  img {
    width: 200px;
  }
  p {
    justify-self: flex-end;

  }
`;