import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import './style.css'
import { Link } from 'react-router-dom';



const Product = ({ product, addProduct }) => {
  return (
    <div className="container">
      <div style={{ width: '17rem', height: '27rem', padding: '0.6rem' }} className='CardMedia'>
        <div className='cardBody'>
          <Link to={`productView/${product.id}`} style={{ textDecoration:'none'}}>
          <img variant="top" src={product.image.url} alt='ProductImage' className='cardImg' width={250} height={280} />
          <h1 className='cardHeading'>{product.name}</h1>
          <h2 className='cardDescription'>
            {product.seo.description}
          </h2>
          </Link>

          <div className='productCartIcon'>
            <h3 className='cardPrice' >{product.price.formatted_with_symbol}</h3>
            <Button sx={{ color: '#232F3E' }}
              onClick={() => {
                addProduct(product.id, 1)
              }}>
              <ShoppingCartIcon fontSize='small' sx={{ color: '#ff523b' }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product