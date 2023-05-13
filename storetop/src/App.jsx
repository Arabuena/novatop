import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ListProducts} from './pages/listProducts';
import {ProductsId } from './pages/productsId';
import styles from './App.module.css';
function App() {
  
  return (
    <>
    <div className={styles.header}>
      <h1><strong style={{color:"red"}}>Eletrônicos</strong>  <strong style={{color:"#fff"}}> Center </strong></h1>
    </div>
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
