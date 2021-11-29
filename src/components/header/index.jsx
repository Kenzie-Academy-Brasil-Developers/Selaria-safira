export const Header = () => {
  return (
    <>
      {" "}
      <h1>
        Selaria Safira<i class="fas fa-hat-cowboy"></i>
      </h1>
      <button onClick={goToCart}>
        <i class="fas fa-shopping-cart"></i>
        <span>carrinho</span>
      </button>
    </>
  );
};
