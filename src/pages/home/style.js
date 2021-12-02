import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const Menu = styled.article`
  max-width: 100vw;
  min-height: 100vh;
  bacground-image: url(${background});
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  overflow: auto;

  @media (min-width: 700px) {
    overflow: initial;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
  }
`;
