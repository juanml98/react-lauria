import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import Cart from './components/cart/cart';
import Gracias from './components/finalizado/gracias';

function App() {
  return (
    <div className='App'>
      
      <CartContextProvider>
      <BrowserRouter>
       
       <NavBar />
      <Routes>
        
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/ordenfinalizada/:idOrder' element={<Gracias/>}/>
        <Route path='*' element={<h1>Error 404: Esta página no existe 😞</h1>}/>
        <Route path='/contacto/' element={<h1>Estamos trabajando en esta página... 🛠</h1>}/>
        <Route />
       
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
 </div>
  );
}

export default App;
