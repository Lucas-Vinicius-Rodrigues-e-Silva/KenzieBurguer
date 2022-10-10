import { useEffect, useState } from "react";
import api from "../../services/api";
import Cart from "../Cart";
import Header from "../Header";
import Itens from "../Itens";
import { SectionMain } from "../MainContent";
import NoItens from "../NoItens";
import { NoItensFound } from "../NoItensFound";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [notFound, setNotFound] = useState(true)

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
        filteredProducts={filteredProducts}
        notFound={notFound}
        setNotFound={setNotFound}
      />
      <SectionMain>
        <div>
          {notFound ? <ul className="main-list">
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
          </ul> : <NoItensFound/>}
         
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
