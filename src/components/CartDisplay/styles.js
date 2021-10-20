import styled from "styled-components";

export const ProductCard = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 350px;
  width: 500px;
  margin: 50px 30px;
  padding: 10px;
  border-bottom: 1px solid black;

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }

  span {
    text-align: center;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
    white-space:nowrap;
  }
  img {
    width: 200px;
  }
  p {
    justify-self: flex-end;


  }
`;