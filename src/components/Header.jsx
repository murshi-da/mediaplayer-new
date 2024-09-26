import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='text-danger fw-bolder'>
         <Link to={'/'} style={{textDecoration:"none",color:"red"}}>
         <i class="fa-solid fa-play fa-beat me-3 fs-4"></i>
         Media-Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
