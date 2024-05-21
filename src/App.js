
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer'
import menBanner from './Components/Assets/banner_mens.png'
import womenBanner from './Components/Assets/banner_women.png'
import kidBanner from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/mens' element={<ShopCategory banner={menBanner} category='men' />}/>
          <Route path='/womens' element={<ShopCategory banner={womenBanner} category='women' />}/>
          <Route path='/kids' element={<ShopCategory banner={kidBanner} category='kid'  />}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignUp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;
