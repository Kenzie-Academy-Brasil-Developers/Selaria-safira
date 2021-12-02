import { useSelector, useDispatch } from "react-redux";
import { RenderProduct } from "../../components/products";
import { Menu } from "./style";
import { StyledHeader } from "../../components/header";
import { addProductThunk } from "../../store/modules/cart /thunks";
export const Card = () => {
  const cardProducts = useSelector((state) => state.cartReducer);
  console.log(cardProducts);

  const dispatch = useDispatch();
  const removeItem = (idToRemove) => {
    const remove = cardProducts.filter((product) => product.id !== idToRemove);
    dispatch(addProductThunk(remove));
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
