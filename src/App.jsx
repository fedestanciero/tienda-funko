import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Checkout from './components/Checkout';
import OrderReceived from './components/OrderReceived';
import Footer from './components/Footer';

export default function App() {

  const productCategories = [
    {id: "1", name: "marvel", nameButton: "Marvel"},
    {id: "2", name: "dc", nameButton: "DC"},
    {id: "3", name: "harry-potter", nameButton: "Harry Potter"},
    {id: "4", name: "star-wars", nameButton: "Star Wars"},
    {id: "5", name: "pokemon", nameButton: "Pokemon"},
]

  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <NavBar productCategories={productCategories}/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order-received" element={<OrderReceived/>}/>
        </Routes>
        <Footer productCategories={productCategories}/>
      </CartContextProvider>
    </BrowserRouter>

    </>
  )
}
