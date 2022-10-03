import InputSearch from "../InputSearch";
import { HeaderContainer } from "./style";

const Header = ({ productsList, setFilteredProducts }) => {
  return (
    <HeaderContainer>
      <div className="menu-container">
        <button className="home-button" onClick={() => setFilteredProducts([])}>
          <h1 className="tittle">
            Burguer <em className="tittle-2">Kenzie</em>
          </h1>
        </button>
        <InputSearch
          productsList={productsList}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;
