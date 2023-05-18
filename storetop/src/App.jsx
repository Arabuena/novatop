
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ListProducts} from './pages/listProducts';
import {ProductsId } from './pages/productsId';
import styles from './App.module.css';
import {Header} from './Componentes/Header';
import {Nave} from './Componentes/nave';

function App() {
  
  return (
    <>
     
   
    <div className={styles.header}>
    <Header/>     
    </div>

    <div><Nave/></div>

    <div>
  <BrowserRouter>
  <Routes>
  <Route index element={<ListProducts/>} />
  <Route path='/productsId/:id' element={<ProductsId/>} />
  </Routes>
  </BrowserRouter>
    </div>
    </>
  )
}

export default App
