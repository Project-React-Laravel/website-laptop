import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Card from './pages/Cart';
import Checkout from './pages/Checkout';
import DefaultLayout from './components/Layouts/DefaultLayout';
import DetailProduct from './pages/DetailProduct';

function App() {
  const Layout = DefaultLayout
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/card' element={<Card/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/detailProduct' element={<DetailProduct/>}></Route>
          </Routes>
        </Layout>
        
      </div>
    </Router>
  );
}

export default App;
