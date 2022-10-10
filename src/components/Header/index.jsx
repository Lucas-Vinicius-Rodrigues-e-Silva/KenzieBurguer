import InputSearch from "../InputSearch";
import { HeaderContainer } from "./style";

const Header = ({ productsList, setFilteredProducts, filteredProducts, setNotFound, notFound }) => {
  function handleClick (){
    setFilteredProducts([])
    !notFound && setNotFound(true)
  }

  return (
    <HeaderContainer>
      <div className="menu-container">
        <button className="home-button" onClick={() => handleClick()}>
          <h1 className="tittle">
            Burguer <em className="tittle-2">Kenzie</em>
          </h1>
        </button>
        <InputSearch
          productsList={productsList}
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
          setNotFound={setNotFound}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;
