import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 8vh;
  background-color: rgb(165, 94, 36,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    margin-left: 2.6%;
    color: #efdbff;
  }
  button {
    margin-right: 2.6%;
    background-color: transparent;
    border: 0;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align-center;
  }
  span{
    margin-top:2px;
    font-size:10px;
  }
`;
export const Menu = styled.article`
  width: 100vw;
  max-height: 100vh;
  bacground-image: url(${background});
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  overflow: auto;

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 200vh;
  }
`;
