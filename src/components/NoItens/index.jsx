import { WhitoutItens } from "./style";

const NoItens = () => {
  return (
    <WhitoutItens>
      <div className="cart-tittle">
        <p>Carrinho de compras</p>
      </div>
      <div className="empity-description">
      <p>Seu carrinho está vazio</p>
      <span>Adicione itens</span>
      </div>
    </WhitoutItens>
  );
};

export default NoItens;
