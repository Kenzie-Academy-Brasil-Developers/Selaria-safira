//Esse componente armazena os componentes da loja, os manda para o redux, e renderiza os produtos na tela
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProducts } from "../../store/modules/product/action";
import { changeCart } from "../../store/modules/cart /action";
import { RenderProduct } from "../../components/products";
import { useHistory } from "react-router";
import { HeaderStyled, Menu } from "./style";
export const Home = () => {
  const [defaultProducts, setDefaultProducts] = useState([
    {
      id: 1,
      nome: "Sela americana",
      preço: "800",
      img: "https://image.shutterstock.com/image-photo/saddle-horse-over-bale-hay-600w-311500214.jpg",
    },
    {
      id: 2,
      nome: "Bigorna para ferrador 65kg",
      preço: "1200",
      img: "https://media.istockphoto.com/photos/old-black-anvil-picture-id1284268722",
    },
    {
      id: 3,
      nome: "cabresto de corda",
      preço: "50",
      img: "https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(95)/cavalari/catalog/fotos-produtos-novo/selaria/cabrestos-e-cabos/cabresto-de-corda-boots-horse-verde-escuro-0120191220154925.jpg",
    },
    {
      id: 4,
      nome: "cabresto de couro",
      preço: "100",
      img: "https://image.shutterstock.com/image-photo/portrait-light-brown-horse-leather-600w-1917455054.jpg",
    },
    {
      id: 5,
      nome: "Sela para equitação",
      preço: "3000",
      img: "https://decathlonpro.vteximg.com.br/arquivos/ids/2740322/synthia-saddle-black-17-5-17-51.jpg?v=637517650331470000",
    },
    {
      id: 6,
      nome: "conjunto freio + cabeçada e redea em couro legitimo",
      preço: "300",
      img: "https://image.shutterstock.com/z/stock-photo-head-of-a-horse-in-gala-harness-with-chestnut-coloring-2078947393.jpg",
    },
  ]);
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  //Acessando redux da loja
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.userReducer);
  dispatch(changeProducts(defaultProducts));

  //Trabalhando com redux do carrinho

  const addToCar = (addId) => {
    const filterCart = allProducts.filter((item) => item.id === addId);
    setCarrinhoItens([...carrinhoItens, filterCart[0]]);
    console.log(carrinhoItens);
    dispatch(changeCart(carrinhoItens));
  };

  const history = useHistory();
  const goToCart = () => history.push("/cart");
  return (
    <>
      <HeaderStyled>
        <h1>
          Selaria Safira<i class="fas fa-hat-cowboy"></i>
        </h1>
        <button onClick={goToCart}>
          <i class="fas fa-shopping-cart"></i>
          <span>carrinho</span>
        </button>
      </HeaderStyled>

      <Menu>
        <RenderProduct productsToRender={allProducts} callback={addToCar} />;
      </Menu>
    </>
  );
};
