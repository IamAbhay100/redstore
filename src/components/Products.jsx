import React from 'react'
import Product from './Product'
import { Grid, Container } from '@mui/material'
import './style.css'

const Products = ({ products, addProduct, categories }) => {
  return (
    <><h2 className='heading'> All Products</h2>
     <Container>
      <Grid container rowSpacing={2} m={{sm:1.5,xs:5, md:1}}>
        {products && products.map((product) => {
          return <Grid key={product.id} item xs={12} sm={4} md={3}>
            <Product product={product} addProduct={addProduct} />
          </Grid>
        })}
      </Grid>
    </Container></>
  )
}

export default Products