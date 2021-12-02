import { CardProduct } from "./style";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  removeItemThunk,
  addProductThunk,
} from "../../store/modules/cart /thunks";
import { useSelector } from "react-redux";

export const RenderProduct = ({ type }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const allProducts = useSelector((state) => state.userReducer);

  const addToCart = (item) => dispatch(addProductThunk(item));
  const removeFromCart = (id) => dispatch(removeItemThunk(id));
  return type === "remove"
    ? cartProducts.map((product) => (
        <CardProduct key={product.id}>
          <h1>{product.nome}</h1>
          <img src={product.img} alt={product.name} />
          <div id="info">
            <span>{product.categoria}</span>
            <label>R$ {product.preço?.toFixed(2)}</label>
            <button onClick={() => removeFromCart(product.id)}>
              {type}
              <BsCart3 />
            </button>
          </div>
        </CardProduct>
      ))
    : allProducts.map((product) => (
        <CardProduct key={product.id}>
          <h1>{product.nome}</h1>
          <img src={product.img} alt={product.name} />
          <div id="info">
            <span>{product.categoria}</span>
            <label>R$ {product.preço?.toFixed(2)}</label>
            <button onClick={() => addToCart(product)}>
              {type}
              <BsCart3 />
            </button>
          </div>
        </CardProduct>
      ));
};
