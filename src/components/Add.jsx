import { Button,FloatingLabel,Form,Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../../services/allAPI';


function Add({setUploadVideoResponse}) {

  // state for getting value for adding a video
  const [uploadVideo,setUploadVideo] = useState({
    id:"",
    title:"",
    url:"",
    link:""
  });

  
  console.log(uploadVideo);


  // Function used to get the embed link
  const youtubeLink = (e) => {

    const {value} = e.target


    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11);
      console.log({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`});
      
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }
  

  // Handle add function of modal
  const handleAdd = async () => {
    const {id,title,url,link} = uploadVideo;

    if(!id || !title || !url || !link){
      alert("Please fill all missing fields");
    }
    else{
      const result = await uploadVideoAPI(uploadVideo);
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose();
        alert("Video uploaded successfully");
        setUploadVideoResponse(result.data); 
        // after getting successful response
        setUploadVideo({id:"",title:"",url:"",link:""});
       
      }
      else{
        console.log(result.message);
        alert(result.message);
    
      }
    }
  }

  // state of madals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-itmes-center">
        <h5 className='mt-2 fs-4'>Upload Videos</h5>
        <Button className='ms-2' onClick={handleShow} style={{backgroundColor:'grey'}}><i class="fa-solid fa-arrow-up-from-bracket fa-fade fs-5"></i>
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel
          controlId="floatingInput"
          label="Video Id"
          className="mb-3"
          >
          <Form.Control type="text" placeholder="Video Id" onChange={ (e) => setUploadVideo({...uploadVideo,id:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingtitle" label="Video Title">
            <Form.Control type="text" placeholder="Video Title" onChange={ (e) => setUploadVideo({...uploadVideo,title:e.target.value})} />
          </FloatingLabel>


          <FloatingLabel
          controlId="floatingInput"
          label="Image URL"
          className="mb-3 mt-3"
          >
          <Form.Control type="text" placeholder="Image UR" onChange={ (e) => setUploadVideo({...uploadVideo,url:e.target.value})}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingtitle" label="Video URL">
            <Form.Control type="text" placeholder="Video URL" onChange={youtubeLink} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
