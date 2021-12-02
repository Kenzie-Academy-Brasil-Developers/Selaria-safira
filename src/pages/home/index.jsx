import { RenderProduct } from "../../components/products";
import { Menu } from "./style";
import { StyledHeader } from "../../components/header";
export const Home = () => {
  return (
    <>
      <StyledHeader type="home" />
      <Menu>
        <RenderProduct type="add" />
      </Menu>
    </>
  );
};
