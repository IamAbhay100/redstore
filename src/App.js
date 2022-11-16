import './App.css';
import React from 'react'
import { commerce } from './lib/commerce';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Products from './components/Products'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Account from './components/Account';
import Search from './components/Search';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import ProductView from './components/ProductView';


const App = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({})
    
    const fetchProducts = async () => {
        const response = await commerce.products.list({
          })
        setProducts((response && response.data) || [])
    }
    const fetchProductsPerCategory = async () => {
        const { data: products } = await commerce.products.list({ limit: 200 });
        const { data: categories } = await commerce.categories.list();
        const productsPerCategory = categories.reduce((acc, category) => {
          return [
            ...acc,
            {
              ...category,
              productsData: products.filter((product) =>
                product.categories.find((cat) => cat.id === category.id)
              ),
            },
          ];
        }, []);
    
        setCategories(productsPerCategory);
      };



    const fetchCarts = async () => {
        const response = await commerce.cart.retrieve()
        setCart(response)
    }

    useEffect(() => {
        fetchProductsPerCategory()
        fetchProducts()
        fetchCarts()
    })

    const addProduct = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity)
        setCart(response.cart)
    }
    const updateCart = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity })
        setCart(response.cart)
    }
    const removeCartItem = async (productId) => {
        const response = await commerce.cart.remove(productId)
        setCart(response.cart)
    }
    const emptyCart = async () => {
        const response = await commerce.cart.empty()
        setCart(response.cart)
    }
    // console.log('cart data ===>>>', cart)
    

    return (
        <Router>
            <NavBar cartItems={cart && cart.total_items}/>
            <Routes>
                <Route path='/' exact='true' element={<Home categories={categories}  addProduct={addProduct} />} />
                <Route path='/products' exact='true' element={<Products products={products} addProduct={addProduct}/>} />
                <Route path='/contactus' exact='true' element={<Contactus />} />
                <Route path='/account' exact='true' element={<Account />} />
                
                <Route path='/cart' exact='true' element={<Cart cart={cart} cartLineItems={cart && cart.line_items} updateCart={updateCart} removeCartItem={removeCartItem} emptyCart={emptyCart} />} />
                <Route path='/search/:searchTerm' exact='true' element={<Search />} />
                <Route path='/checkout' exact='true' element={ <Checkout />} />
                <Route path='/products/productView/:id' element={ <ProductView addProduct={addProduct}/>} />
            </Routes>
            <Footer />
        </Router>
    )
}


export default App
