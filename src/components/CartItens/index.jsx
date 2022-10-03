import { InCartItens } from "./style";

const CartItens = ({
  name,
  image,
  category,
  cartProducts,
  setCartProducts,
  products,
}) => {
  function removeItem() {
    setCartProducts(cartProducts.filter((product) => product !== products));
  }

  return (
    <InCartItens>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
      <button onClick={removeItem}>Remover</button>
      </InCartItens>
  );
};

export default CartItens;
