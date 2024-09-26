import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
<MDBFooter bgColor='info' className='text-white text-center text-md-start '>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Media Player</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Uploads
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  History
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  LandingPage
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Subscribe
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Complaints
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          mediaplayer.com
        </a>
      </div>
    </MDBFooter>
      
    </>
  )
}

export default Footer