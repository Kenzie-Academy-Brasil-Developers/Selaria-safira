import { CardProduct } from "./style";

export const RenderProduct = ({ productsToRender, callback, buttonText }) => {
  console.log(productsToRender);
  return productsToRender.map((product) => (
    <CardProduct key={product.id}>
      <h1>{product.nome}</h1>
      <img src={product.img} alt={product.name} />
      <div id="info">
        <span>{product.categoria}</span>
        <label>R$ {product.preço.toFixed(2)}</label>
        <button onClick={() => callback(product.id)}>
          {buttonText}
          <i id="item-buttonAdd" class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </CardProduct>
  ));
};
