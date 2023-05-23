
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ListProducts} from './pages/listProducts';
import {ProductsId } from './pages/productsId';
import styles from './App.module.css';
import {Header} from './Componentes/Header';
import {Nave} from './Componentes/nave';
import SlideShow from './Componentes/slide';
import Footer from './Componentes/footer';
import {Copy} from './Componentes/copy'

function App() {
  
  return (
    <>
        
    <div className={styles.header}>
    <Header/>     
    </div>

    <div><Nave/></div>

   <div> <SlideShow/></div>

    <div>
  <BrowserRouter>
  <Routes>
  <Route index element={<ListProducts/>} />
  <Route path='/productsId/:id' element={<ProductsId/>} />
  </Routes>
  </BrowserRouter>
    </div>
    <div><Footer/></div> 
    <div><Copy/></div>
   
    </>
  )
}

export default App
