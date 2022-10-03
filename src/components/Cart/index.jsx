import CartItens from "../CartItens";
import TotalMoney from "../TotalMoney";
import { CartUl } from "./style";

const Cart = ({ cartProducts, setCartProducts }) => {
  return (
    <CartUl>
      <div className="cart-tittle">
        <p>Carrinho de compras</p>
      </div>
      {cartProducts.map((products) => (
        <CartItens
          key={products.id}
          name={products.name}
          image={products.img}
          category={products.category}
          price={products.price}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          products={products}
        />
      ))}
      <div className="total-money">
        <TotalMoney
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </div>
    </CartUl>
  );
};

export default Cart;
