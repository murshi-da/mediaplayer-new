import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'



function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setVideoResponse]=useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'#ffc107', fontSize:'30px'}}>Watch History <i class="fa-solid fa-right-from-bracket"></i></Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setVideoResponse={setVideoResponse}/>
        </div>
        <div className="all-videos col-lg-3">
          <Category  dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home