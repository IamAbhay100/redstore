import React from 'react'
import CarouselHome from './CarouselHome';
import Product from './Product'
import './style.css'
import { Grid, Container } from '@mui/material'
import Advantages from './Advantages';


const Home = ({ categories, addProduct }) => {

  return (
    <>
      <CarouselHome />
      <Container sx={{ paddingY: '20px'}}>
        <div id="products">
        {categories.map((category) =>
          category.productsData.length ? (
            <div key={category.id}>
              <Container>
                <h2 className='headingProduct'> {category.name} </h2>
                <Grid container spacing={4}>
                  {category.productsData.map((product) => (
                    <Grid key={product.id} item xs={12} sm={4} md={3}>
                      <Product
                        product={product}
                        addProduct={addProduct}
                        categoryName={category.name}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          ) : null
        )}
      </div>
      </Container>
      <Advantages />
    </>
  )
}

export default Home