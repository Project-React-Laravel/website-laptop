import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Card from './pages/Card';
import DefaultLayout from './components/Layouts/DefaultLayout';

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
          </Routes>
        </Layout>
        
      </div>
    </Router>
  );
}

export default App;
