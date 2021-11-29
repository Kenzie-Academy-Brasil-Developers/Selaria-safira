//Esse componente armazena os componentes da loja, os manda para o redux, e renderiza os produtos na tela
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProducts } from "../../store/modules/product/action";
import { changeCart } from "../../store/modules/cart /action";
import { RenderProduct } from "../../components/products";
import { useHistory } from "react-router";
import { HeaderStyled, Menu } from "./style";
import { BsCart3 } from "react-icons/bs";
import { FaHatCowboy } from "react-icons/fa";
export const Home = () => {
  const [carrinhoItens, setCarrinhoItens] = useState([]);
  const [action, setAction] = useState(false);
  //Acessando redux da loja
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.userReducer);

  //Trabalhando com redux do carrinho
  const addToCar = (addId) => {
    // let arrayIds = [];
    // carrinhoItens.forEach((item) => arrayIds.push(item.id));
    // if (!arrayIds.includes(addId)) {
    //   const search = allProducts.filter((product) => product.id === addId);
    //   setCarrinhoItens([...carrinhoItens, search[0]]);
    //   dispatch(changeCart(carrinhoItens));
    // }
    const newItem = allProducts.find((product) => product.id === addId);
    setCarrinhoItens([...carrinhoItens, newItem]);
    console.log(addId);
    console.log(newItem);
  };

  const history = useHistory();
  const goToCart = () => history.push("/cart");
  return (
    <>
      <HeaderStyled>
        <h1>
          Selaria Safira
          <FaHatCowboy />
        </h1>
        <button onClick={goToCart}>
          <BsCart3 />
          <span>carrinho</span>
        </button>
      </HeaderStyled>

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
