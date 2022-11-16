import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { commerce } from '../lib/commerce';
import { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material'
import './style.css'
import Spinner from 'react-bootstrap/Spinner';


const ProductView = ({ addProduct }) => {
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id)
    console.log('single product:', response)
    const { name, image, price, quantity, description } = response
    setProduct({
      id,
      name,
      image: image.url,
      quantity,
      description: description.slice(3, -4),
      price: price.formatted_with_symbol
    })
  }

  const updateCart = (param) => {
    if (param === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    }
    if (param === 'increase' && quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  useEffect(() => {
    const id = window.location.pathname.split('/')
    fetchProduct( id[3])
  }, [])

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} sm={4}></Grid>
        <div className="productContent" >
          <img onLoad={() => {
            setLoading(false)
          }} variant="top" src={product.image} alt='ProductImage' className='cardImg' width={380} height={450} />
          {loading && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner animation="border" className='spinner' />
          </div>}
          <div className='productContainer'>
            <h1 className='productHeading' >{product.name}</h1>
            <h2 className='productDescription'>
              {product.description}
            </h2>
            <h3 className='productPrice'>{product.price}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button className='Button2' onClick={() => {
                updateCart('increse')
              }}> + </button>
              <button style={{ width: '6rem', backgroundColor: '#fff', border: 'none' }}> Quantity: {quantity}</button>
              <button className='Button2' style={{ backgroundColor: '#1976d2' }}
                onClick={() => {
                  updateCart('decrease')
                }}> - </button>
            </div>
            <button className='shoppingButton'
              onClick={() => {
                addProduct(product.id, quantity)
              }}>
              <ShoppingCartIcon fontSize='medium' /><h4>Add To Cart</h4>
            </button>
          </div>

        </div>
      </Grid>

    </Container>
  )
}

export default ProductView