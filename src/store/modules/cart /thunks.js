import { changeCart } from "./action";
import { toast } from "react-toastify";
export const addProductThunk = (newProduct) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const ids = cart.map((item) => item.id);
    if (!ids.includes(newProduct.id)) {
      const updatedCart = [...cart, newProduct];
      dispatch(changeCart(updatedCart));
      toast.success("Produto adicionado ao carrinho", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    {
      toast.error(" O Produto JÁ FOI adicionado ao carrinho!");
    }
  };
};
export const removeItemThunk = (idToRemove) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const remove = cart.filter((product) => product.id !== idToRemove);
    dispatch(changeCart(remove));
    if (remove.lenght !== cart.lenght) {
      toast.default("Produto removido");
    }
  };
};
