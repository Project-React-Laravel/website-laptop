import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import DefaultLayout from './components/Layouts/DefaultLayout';
import DetailProduct from './pages/DetailProduct';
import Login from './pages/Login';

function App() {
    const Layout = DefaultLayout;

    //API Products
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch('https://laptopapi.000webhostapp.com/api/laptops')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    ></Route>
                    <Route
                        path="/shop"
                        element={
                            <Layout>
                                <Shop />
                            </Layout>
                        }
                    ></Route>
                    <Route
                        path="/cart"
                        element={
                            <Layout>
                                <Cart />
                            </Layout>
                        }
                    ></Route>
                    <Route
                        path="/checkout"
                        element={
                            <Layout>
                                <Checkout />
                            </Layout>
                        }
                    ></Route>
                    {products.map((product, index) => (
                        <Route
                            key={product.id}
                            path={'/detailProduct/'.concat(product.id)}
                            element={
                                <Layout>
                                    <DetailProduct children={product.id} />
                                </Layout>
                            }
                        ></Route>
                    ))}
                    <Route
                        path="/login"
                        element={
                            <Layout>
                                <Login />
                            </Layout>
                        }
                    ></Route>
                    <Route
                        path="/admin"
                        element={
                            <Layout admin>
                                <Admin />
                            </Layout>
                        }
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
