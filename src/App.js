import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category/";
import Product from "./pages/Product/";
import './App.css';
import NavBar from './components/NavBar';

// CONTEXT
import { ItemsProvider } from "./context/ItemsContext";

function App() {
  return (
    <ItemsProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/category/:id" element={<Category />}/>
            <Route path="/product/:id" element={<Product />}/>
          </Routes>
        </Router>
    </ItemsProvider>
  );
}

export default App;
