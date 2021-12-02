import { useSelector, useDispatch } from "react-redux";
import { changeCart } from "../../store/modules/cart /action";
import { RenderProduct } from "../../components/products";
import { Menu } from "./style";
import { StyledHeader } from "../../components/header";
export const Card = () => {
  const cardProducts = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const removeItem = (idToRemove) => {
    const remove = cardProducts.filter((product) => product.id !== idToRemove);
    dispatch(changeCart(remove));
  };

  return (
    <>
      <StyledHeader type="cart" />
      <Menu>
        <RenderProduct
          productsToRender={cardProducts}
          callback={removeItem}
          buttonText="remove"
        />
      </Menu>
    </>
  );
};
