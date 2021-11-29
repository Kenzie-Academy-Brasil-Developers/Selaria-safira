import { CardProduct } from "./style";
export const RenderProduct = ({ productsToRender, callback }) => {
  return productsToRender.map((product) => (
    <CardProduct key={product.id}>
      <h1>{product.nome}</h1>
      <label>R$ {product.preço}</label>
      <img src={product.img} alt={product.name} />
      <button onClick={() => callback(product.id)}>Add</button>
    </CardProduct>
  ));
};
