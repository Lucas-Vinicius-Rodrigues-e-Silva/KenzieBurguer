import { useEffect, useState } from "react";
import api from "../../services/api";
import Cart from "../Cart";
import Header from "../Header";
import Itens from "../Itens";
import { SectionMain } from "../MainContent";
import NoItens from "../NoItens";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    api
      .get("products")
      .then((res) => {
        const { data } = res;
        setProductsList(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Header
        productsList={productsList}
        setFilteredProducts={setFilteredProducts}
      />
      <SectionMain>
        <div>
          <ul className="main-list">
            {filteredProducts.length === 0
              ? productsList.map(({ id, name, img, category, price }) => (
                  <Itens
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    key={id}
                    name={name}
                    image={img}
                    category={category}
                    price={price}
                    id={id}
                    productsList={productsList}
                  />
                ))
              : filteredProducts.map(({ id, name, img, category, price }) => (
                  <Itens
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    key={id}
                    name={name}
                    image={img}
                    category={category}
                    price={price}
                    id={id}
                    filteredProducts={filteredProducts}
                  />
                ))}
          </ul>
          {cartProducts.length === 0 ? (
            <NoItens />
          ) : (
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          )}
        </div>
      </SectionMain>
    </main>
  );
};

export default ProductsList;
