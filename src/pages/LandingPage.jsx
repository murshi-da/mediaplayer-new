import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' 

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{fontSize:'40px'}}>Welcome to <span style={{color:'#ffc107'}} className=''>Media Player</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odit quas voluptate, odio sint assumenda. Eius praesentium ex beatae hic laborum veritatis magni, consequuntur tenetur, vitae tempora quasi laudantium alias.</p>
        <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-4'>GEt Started</button>
        </Col>
        <Col lg={5}>
        <img style={{width:'100%', borderRadius:'40px'}} src='https://cdn.dribbble.com/users/401212/screenshots/2933339/musicplayer_2_dr.gif' alt='gif'></img>
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{width:'22rem'}} className='p-4 bg-info'>
            <Card.Img varient="top" height={'300px'} width={'300px'} src='https://cdn.dribbble.com/users/1150070/screenshots/4020323/listen-music_02.gif'/>
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>Manage your videos with our platform. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width:'22rem'}} className='p-4 bg-info'>
            <Card.Img varient="top" height={'300px'} width={'300px'} src='https://cdn.dribbble.com/users/411641/screenshots/3921966/listen.gif'/>
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>Manage your videos with our platform. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width:'22rem'}} className='p-4 bg-info'>
            <Card.Img varient="top" height={'300px'} width={'300px'} src='https://cdn.dribbble.com/users/1598135/screenshots/3319817/listening_to_some_tunes.gif'/>
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>Manage your videos with our platform. Lorem ipsum dolor, sit amet consectetur adipisicing elit. </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-4">
          <h4 style={{fontFamily:"fantasy", letterSpacing:'2px'}} className="text-warning text-center">SIMPLE POWERFUL FAST</h4>
          <h6 className="mb-5 mt-3"><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos nihil repellat a provident. Ea molestias fugit error omnis eius quo temporibus saepe perferendis, commodi facere hic modi eaque qui?
          Accusantium tempora, iste distinctio non ab minus fuga fugit a numquam deleniti. Ullam perferendis in cum laboriosam illo ipsam possimus. Earum ducimus qui rem fugiat rerum sint nobis eius placeat?</h6>
        
          <h6 className="mb-5 mt-3"><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos nihil repellat a provident. Ea molestias fugit error omnis eius quo temporibus saepe perferendis, commodi facere hic modi eaque qui?
          Accusantium tempora, iste distinctio non ab minus fuga fugit a numquam deleniti. Ullam perferendis in cum laboriosam illo ipsam possimus. Earum ducimus qui rem fugiat rerum sint nobis eius placeat?</h6>
        
        </div>
        <div className="video col-lg-6">
        <iframe style={{borderRadius:'30px', boxShadow:'2px 4px 6px black'}} width="560" height="315" src="https://www.youtube.com/embed/oJnF5VxTO5g?si=KNdO7kmalKzB2aEh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
     
      </div>
    </>
  )
}

export default LandingPage