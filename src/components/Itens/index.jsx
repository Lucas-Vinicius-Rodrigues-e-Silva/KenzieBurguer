import { AllItens } from "./style";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Itens = ({
  name,
  image,
  category,
  price,
  cartProducts,
  setCartProducts,
  id,
  productsList,
}) => {
  function addToCart(event) {
    const itemId = event.target.id;

    const findTheSameProduct = cartProducts.find(
      (product) => product.id == itemId
    );

    if (findTheSameProduct) {

      toast.error('Você só pode inserir um item igual no carrinho!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      const newProduct = productsList.find((product) => product.id == itemId);
      setCartProducts([...cartProducts, newProduct]);
    }
  }

  return (
    <AllItens>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
      <span>R${price}</span>
      <button id={id} onClick={addToCart}>
        Adicionar
      </button>
    </AllItens>
  );
};

export default Itens;
