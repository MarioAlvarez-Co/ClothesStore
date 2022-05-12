import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderContainer } from '../container/HeaderContainer';
import { Home } from "../pages/Home";
import { Products } from '../pages/Products'
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';


function App() {
  const initilState=useInitialState();
  return (
    <AppContext.Provider value={initilState}>
      <BrowserRouter>
        <HeaderContainer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search-products' element={<Products/>}/>
        </Routes>    
      </BrowserRouter>      
    </AppContext.Provider>
  );
}

export default App;
