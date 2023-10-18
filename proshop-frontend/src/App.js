import './App.css';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterSreen from './screens/RegisterSreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderSreen from './screens/PlaceOrderSreen';
import OrderSreen from './screens/OrderSreen';
import UserListScreen from './screens/UserListScreen';
import UserEditSreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditSreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} exact />
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterSreen />} />
                        <Route path='/profile' element={<ProfileScreen />} />
                        <Route path='/shipping' element={<ShippingScreen />} />
                        <Route path='/payment' element={<PaymentScreen />} />
                        <Route path='/placeorder' element={<PlaceOrderSreen />} />
                        <Route path='/order/:id' element={<OrderSreen />} />
                        <Route path='/product/:id' element={<ProductScreen />} />
                        <Route path='/cart/:id?' element={<CartScreen />} />

                        <Route path='/admin/userlist' element={<UserListScreen />} />
                        <Route path='/admin/user/:id/edit' element={<UserEditSreen />} />

                        <Route path='/admin/productlist' element={<ProductListScreen />} />
                        <Route path='/admin/product/:id/edit' element={<ProductEditSreen />} />

                        <Route path='/admin/orderlist' element={<OrderListScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router >
    );
}

export default App;
