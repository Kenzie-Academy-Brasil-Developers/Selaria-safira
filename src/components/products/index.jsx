import { CardProduct } from "./style";
import { BsCart3 } from "react-icons/bs";

export const RenderProduct = ({ productsToRender, callback, buttonText }) => {
  console.log(productsToRender);
  return productsToRender.map((product) => (
    <CardProduct key={product.id}>
      <h1>{product.nome}</h1>
      <img src={product.img} alt={product.name} />
      <div id="info">
        <span>{product.categoria}</span>
        <label>R$ {product.preço?.toFixed(2)}</label>
        <button onClick={() => callback(product.id)}>
          
          {buttonText}
          <BsCart3 />
        </button>
      </div>
    </CardProduct>
  ));
};
