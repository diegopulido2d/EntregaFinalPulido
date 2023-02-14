import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Category from "./pages/Category/";
import Product from "./pages/Product/";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </Router>
  );
}

export default App;
