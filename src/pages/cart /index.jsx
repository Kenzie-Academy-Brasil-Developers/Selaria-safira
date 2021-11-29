import { useSelector, useDispatch } from "react-redux";
import { changeCart } from "../../store/modules/cart /action";
import { useHistory } from "react-router";
import { RenderProduct } from "../../components/products";
import { Menu } from "../home/style";

export const Card = () => {
  const cardProducts = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const removeItem = (idToRemove) => {
    const remove = cardProducts.filter((product) => product.id !== idToRemove);
    dispatch(changeCart(remove));
    console.log(cardProducts, "all");
  };

  const history = useHistory();
  const goToStore = () => history.push("/");

  return (
    <div>
      <button onClick={goToStore}>Voltar para a loja</button>
      <Menu>
        <RenderProduct productsToRender={cardProducts} callback={removeItem} />;
      </Menu>
    </div>
  );
};
