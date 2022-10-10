import { useState } from "react";
import { toast } from "react-toastify";
import { NoItensFound } from "../NoItensFound";
import { Form } from "./style";

const InputSearch = ({
  productsList,
  setFilteredProducts,
  setNotFound,
}) => {
  const [item, setItem] = useState("");

  function searchedProduct(event) {
    event.preventDefault();
    if (item === "") {
      toast.error("O campo não pode estar vazio!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const correctSearch = item.toLocaleLowerCase();
    const products = productsList.filter(
      (product) =>
        product.name.toLowerCase().includes(correctSearch) ||
        product.category.toLowerCase().includes(correctSearch)
    );
    if(products.length === 0){
      setNotFound(false)
      setItem("");
    } else {
      setFilteredProducts(products);
      setItem("");
    }
  }

  return (
    <Form onSubmit={searchedProduct}>
      <input
        type="text"
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
