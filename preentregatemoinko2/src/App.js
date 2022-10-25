import logo from './logo.svg';
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <main>
        <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryName" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/Form" element={<Form />}/>
           
        </Routes> 
        </main>
      </div>
    </BrowserRouter>

   
  );
}

export default App;
