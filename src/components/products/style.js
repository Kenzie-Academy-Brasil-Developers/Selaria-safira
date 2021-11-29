import styled from "styled-components";

export const CardProduct = styled.div`
  min-width: 70%;
  height: 80vh;
  border: 2px solid #e58700;
  border-radius: 10px;
  margin: 1%;
  background-color: rgb(245, 245, 245, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  h1 {
    color: gray;
    font-size: 20px;
    margin: 0;
  }
  button {
    background-color: red;
  }

  @media (min-width: 600px) {
    min-width: 37%;
  }
  @media (min-width: 1000px) {
    min-width: 22%;
    height: 80vh;
  }
`;
