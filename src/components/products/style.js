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
    border-bottom: 1px solid #e58700;
    
  }
  div#info {
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  button {
    background-color: #e58700;
    border: 0;
    width: 50%;
    height: 30%;
    border-radius: 6px;
    color: white;
    font-weight: 800;
    :hover {
      transition: 1s;
      border: 1px solid white;
    }
    :active {
      width: 40%;
      height: 20%;
      background-color: #e56500;
    }
  }
  #item-buttonAdd{
    margin-left:3%;
  }
  span{
    background-color:rgb(165, 94, 36,0.5);
    border:radius:5px;
    padding:3px;
    max-width:80px;
    text-align:center;
    border-radius:5px;
    color:white;
    font-size:12px;
  }
  @media (min-width: 600px) {
    min-width: 37%;;
  max-height: 70vh;
  h1{
    width:200px;
    text-align:center;
  }

  }
  @media (min-width: 1000px) {
    min-width: 22%;
    height: 80vh;
  }
`;
