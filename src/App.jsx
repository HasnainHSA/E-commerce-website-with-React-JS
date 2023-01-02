import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
import Cart from './components/Cart'
import { Provider } from 'react-redux';
import store from './store/reducer'
import Details from './components/Details'
import Ordersuccessful from './components/Ordersuccessful'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/cart/ordersuccessful' element={<Ordersuccessful />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </Provider>
    </ BrowserRouter>
  
    </div>
  )
}

export default App