import { HeaderStyled } from "./style";
import { BsCart3 } from "react-icons/bs";
import { FaHatCowboy } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { useHistory } from "react-router";

export const StyledHeader = ({ type }) => {
  const history = useHistory();
  const goToStore = () => history.push("/");
  const goToCart = () => history.push("/cart");
  return (
    <HeaderStyled>
      <h1>
        Selaria Safira
        <FaHatCowboy />
      </h1>
      {type === "cart" ? (
        <button onClick={goToStore}>
          <RiHome4Fill />
          <span>loja</span>
        </button>
      ) : (
        <button onClick={goToCart}>
          <BsCart3 />
          <span>carrinho</span>
        </button>
      )}
    </HeaderStyled>
  );
};
