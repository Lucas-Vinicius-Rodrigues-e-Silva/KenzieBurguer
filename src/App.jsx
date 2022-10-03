import GlobalStyle from "./styles/global";
import "./App.css";
import ProductsList from "./components/ProductsList";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <ProductsList />
    </div>
  );
}

export default App;
