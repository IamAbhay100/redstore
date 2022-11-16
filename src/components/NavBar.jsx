import React from 'react'
import { Stack, IconButton, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Contactus from './Contactus'
import Cart from './Cart'
import Account from './Account'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search'
import logo from '../images/logo-white.png'
import Search from './Search'



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = ({ cartItems }) => {

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container gap={2}>
        <Link to='/' exact='true' element={<Home />}>
          <img src={logo} alt='Logo' width={150}></img>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="flex-end"
              alignItems="center"
              paddingX={2}
              paddingY={1.2}>

              <div className='searchInput' width={400} flexWrap='nowrap' flexDirection='row'>
                <input placeholder='  Search...' type='text' size={10} style={{ border: 'none', outline: 'none' }} />
                <IconButton type='submit' sx={{ color: '#ff523b' }} onClick={() => { (<Search />) }}>
                  <SearchIcon />
                </IconButton>
              </div>
              <Link to='/' element={<Home />} style={{
                color: '#FFFFFF', textDecoration: 'none'
              }} className='navbar' > <h1 className='navHeading'>Home </h1></Link>
              <Link to='/products' element={<Products />} style={{ color: '#FFFFFF', textDecoration: 'none' }}> <h1 className='navHeading'>Products</h1></Link>
              <Link to='/contactus' element={<Contactus />} style={{ color: '#FFFFFF', textDecoration: 'none' }}> <h1 className='navHeading'>Contact</h1></Link>

              <Link to='/Cart' element={<Cart />} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                <Badge badgeContent={cartItems} color='primary'>
                  <ShoppingCartIcon ></ShoppingCartIcon>
                </Badge>
              </Link>
              <Link to='/account' element={<Account />} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                <AccountCircleIcon></AccountCircleIcon>
              </Link>

            </Stack>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar