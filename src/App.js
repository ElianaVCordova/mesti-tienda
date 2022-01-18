import "./App.css";
import Navbar from "./componentes/Navbar/navbar";
import ProductCard from "./componentes/ProductCard/ProductCard";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <ProductCard articulo='Collar' tamaño="M" material="Sintetica Sublimada" />
          <ProductCard articulo="Petral" tamaño="L" material="Sintetica Sublimada" />
          <ProductCard articulo="Correa" tamaño="2 metros" material="Sintetica Sublimada" />
    </div>
  );
}

export default App;
