

import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function VideoCard({video,setdeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {title,link} = video;

    let today =new Date();

    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",
    // minute:"2-digit",second:"2-digit"}).format(today));
    
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",
                    minute:"2-digit",second:"2-digit"}).format(today);

    let videoHistory = {title,link,timeStamp};

    // make API call
    await addVideoHistoryAPI(videoHistory);

  }

  const removeVideo = async (id) => {
    await deleteVideoAPI(id);
    setdeleteVideoResponse(true);
  }


  const dragstarted=(e,id)=>{
    console.log("dragstarted video id:"+id);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <div>
      <Card style={{ width: '17rem'}} draggable onDragStart={e=>dragstarted(e,video.id)}>
        <Card.Img variant="top" src={video.url} onClick={handleShow} style={{width:'100%',height:"150px"}} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h5>{video.title}</h5>
{      insideCategory?null:       <button className='btn' onClick={()=>removeVideo(video?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
}          </div>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard
