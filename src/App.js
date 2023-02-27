import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import DefaultLayout from './components/Layouts/DefaultLayout';
import DetailProduct from './pages/DetailProduct';
import Login from './pages/Login';

function App() {
  const Layout = DefaultLayout
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/detailProduct' element={<DetailProduct/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Layout>
        
      </div>
    </Router>
  );
}

export default App;
