//Esse componente armazena os componentes da loja, os manda para o redux, e renderiza os produtos na tela
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../store/modules/cart /action";
import { RenderProduct } from "../../components/products";
import { Menu } from "./style";
import { StyledHeader } from "../../components/header";
import { addProductThunk } from "../../store/modules/cart /thunks";
export const Home = () => {
  const [carrinhoItens, setCarrinhoItens] = useState([]);
  //Acessando redux da loja
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.userReducer);
  //Trabalhando com redux do carrinho
  const addToCar = (addId) => {
    // let arrayIds = [];
    // carrinhoItens.forEach((item) => arrayIds.push(item.id));
    // if (!arrayIds.includes(addId)) {
    const newProduct = allProducts.find((product) => product.id === addId);
    setCarrinhoItens(newProduct);
    // }
  };
  dispatch(addProductThunk(carrinhoItens));

  return (
    <>
      <StyledHeader type="home" />
      <Menu>
        <RenderProduct
          productsToRender={allProducts}
          callback={addToCar}
          buttonText="add"
        />
      </Menu>
    </>
  );
};
