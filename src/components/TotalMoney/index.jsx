import { TotalPriceComponent } from "./style";

const TotalMoney = ({ cartProducts, setCartProducts }) => {
  const finalResult = cartProducts.reduce((actualValue, previousValue) => {
    const total = parseFloat(previousValue.price);

    return total + actualValue;
  }, 0);

  function removeAll() {
    setCartProducts([]);
  }

  return (
    <TotalPriceComponent>
      <div className="total">
        <p>Total:</p>
        <span> R${finalResult.toFixed(2)}</span>
      </div>
      <div className="remove-all-btn">
        <button onClick={removeAll}>Remover todos</button>
      </div>
    </TotalPriceComponent>
  );
};

export default TotalMoney;
