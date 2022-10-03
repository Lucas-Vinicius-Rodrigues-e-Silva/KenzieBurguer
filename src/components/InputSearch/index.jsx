import { useState } from "react";
import { Form } from "./style";

const InputSearch = ({ productsList, setFilteredProducts }) => {
  const [item, setItem] = useState("");

  function searchedProduct(event) {
    event.preventDefault();
    if (item === "") {
      alert("Escreve certo ai po");
    } else {
      const products = productsList.filter(
        (product) => product.name.includes(item) || product.category === item
      );
      setFilteredProducts(products);
      setItem("");
    }
  }

  return (
    <Form onSubmit={searchedProduct}>
      <input 
        type="text"
        required
        placeholder="Digite aqui a sua descrição"
        name="item"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button type="submit">Buscar item</button>
    </Form>
  );
};

export default InputSearch;
