import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 100vw;
  height: 8vh;
  background-color: rgb(165, 94, 36,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0;

  h1 {
    margin: 0;
    margin-left: 2.6%;
    color: #efdbff;
  }
  button {
    background-color: transparent;
    border: 0;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    text-align-center;
    margin-right:2.6%;
  }
  span{
    margin-top:2px;
    font-size:10px;
  }
  svg{
    margin:0;
  padding:0;
}
`;
