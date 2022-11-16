import React from 'react'
import { Grid, Stack } from '@mui/material'
import './style.css'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

const Cart = ({cart, cartLineItems, updateCart, removeCartItem, emptyCart }) => {
  if (!cartLineItems || !cartLineItems.length)
    return <div style={{ height:'100vh', width:'100%', display:'flex',alignItems:'center', justifyContent:'center'}}>
        <Spinner animation="border" className='spinner' />
    </div> 
  return (
    <div className='cart' style={{ display: 'flex', flexWrap:'wrap', backgroundColor: '#f1f3f6' }}>
      <Stack width={{md:'68%',sm:'100%'}} margin={{md:1,sm:1,xs:1}} padding={1} boxShadow={1} sx={{ backgroundColor: '#fff' }}>
        <Grid container rowSpacing={2} m={1}>
          {cartLineItems.map((product) => {
            return <Grid key={product.id} item xs={12} md={8} sm={4}>
              <div className='cartContainer'>
                <img variant="top" src={product.image.url} alt='ProductImage' className='cardImg' width={200} height={220} />
                <div className="cardContent" >
                  <h1 className='cardHeading' >{product.name}</h1>
                  <h3 className='cardPrice'>{product.price.formatted_with_symbol}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <button className='quantityButton' onClick={() => {
                      updateCart(product.id, product.quantity + 1)
                    }}> + </button>
                    <button style={{ width: '3.5rem', border: '1px solid #ff523b', backgroundColor: '#fff' }}> {product.quantity}</button>
                    <button className='quantityButton' onClick={() => {
                      updateCart(product.id, product.quantity - 1)
                    }}> - </button>
                  </div>
                  <button className='cardButton' onClick={() => {
                    removeCartItem(product.id)
                  }}> Remove </button>
                </div>
              </div>
            </Grid>
          })}
        </Grid>
        <Stack flexDirection={{sm:'column', md:'row'}} justifyContent={{xs:'center',md:'flex-start'}}
        alignItems='center' flexWrap='wrap'>
          <button className='cardButton2' onClick={emptyCart}>Empty Cart</button>
          <Link to='/checkout'>
          <button className='cardButton2' > Check Out</button>
          </Link>
        </Stack>
      </Stack>

      <Stack width={{ xs:'100%', sm:'100%', md:'26%'}} height='60%' margin={{md:1,sm:1,xs:1}} paddingX={2} paddingY={1} boxShadow={1} position='sticky' sx={{ backgroundColor: '#fff' }}>
        <h2 className='cardHeading'>PRICE DETAILS</h2>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1px', margin: '1px' }}>
          <h2 className='cardPrice'>Price({cart.total_unique_items} items)</h2><h2 className='cardPrice'> {cart.subtotal.formatted_with_symbol} </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1px', margin: '1px' }}>
          <h2 className='cardPrice' >Discount</h2><h2 className='cardPrice' style={{ color: '#388e3c' }}>- 0 </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1px', margin: '1px' }}>
          <h2 className='cardPrice'>Delivery Charges</h2><h2 className='cardPrice'> 0 </h2>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center', padding: '1px', margin: '1px' }}>
          <h1 style={{fontSize:'20px', color:'#555'}}> Total Amount : </h1>
          <h2 className='cardPrice'> {cart.subtotal.formatted_with_symbol}</h2>
        </div>

        <hr />

        <h4 style={{ fontSize: '15px', color: '#388e3c' }}>You Saved {0} on this order</h4>


      </Stack>

    </div>
  )
}

export default Cart