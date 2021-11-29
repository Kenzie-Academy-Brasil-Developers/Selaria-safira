import { useSelector, useDispatch } from "react-redux";
import { changeCart } from "../../store/modules/cart /action";
import { useHistory } from "react-router";
import { RenderProduct } from "../../components/products";
import { Menu, HeaderStyled } from "./style";
import { RiHome4Fill } from "react-icons/ri";

export const Card = () => {
  const cardProducts = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const removeItem = (idToRemove) => {
    const remove = cardProducts.filter((product) => product.id !== idToRemove);
    dispatch(changeCart(remove));
    // console.log(cardProducts, "all");
  };

  const history = useHistory();
  const goToStore = () => history.push("/");

  return (
    <>
      <HeaderStyled>
        <h1>
          Selaria Safira<i class="fas fa-hat-cowboy"></i>
        </h1>
        <button onClick={goToStore}>
          <RiHome4Fill />
          <span>Voltar Para a loja</span>
        </button>
      </HeaderStyled>
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
