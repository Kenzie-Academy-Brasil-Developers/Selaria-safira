import { RenderProduct } from "../../components/products";
import { Menu } from "./style";
import { StyledHeader } from "../../components/header";
export const Card = () => {
  return (
    <>
      <StyledHeader type="cart" />
      <Menu>
        <RenderProduct type="remove" />
      </Menu>
    </>
  );
};
