import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';





function Category({dropVideoResponse}) {
  const [categoryName,setcategoryName]=useState("")
  const[allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd =async()=>{
if(categoryName){
const result=await addCategoryAPI({categoryName,allVideos:[]})
console.log(result)
if(result.status>=200 && result.status<300){
  handleClose()
  setcategoryName("")
  getCategories()
}
else{
  alert(result.message)
}
}
else{

}
  }


  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])




  const getCategories= async()=>{
    const {data}= await getCategoryAPI()

    setAllCategories(data)
  }

// console.log(data)
  console.log(allCategories);




  const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }


  const dragOver =(e)=>{
    console.log("video card dregging over the category");
    e.preventDefault()
  }


  const videoDrop =async (e,categoryid)=>{

    const videoId =e.dataTransfer.getData("videoId")
    console.log("videoId"+videoId+ "videodropedd inside category"+categoryid);
   const {data}= await getAVideoAPI(videoId)

  console.log(data);

  const selectedCategory =allCategories.find(item=>item.id===categoryid);
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await updateCategoryAPI(categoryid,selectedCategory)
  getCategories()

  }




  const videodragStarted =(e,videoId,categoryid)=>{
    let datashare= {videoId,categoryid}
    e.dataTransfer.setData("data",(JSON.stringify(datashare)))
  }
  return (
    <>
      <div className='d-grid'>
        <button className='btn btn-info' onClick={handleShow}>Add Category</button>

      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control' placeholder='Enter your Category name' 
          onChange={e=>setcategoryName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

 { 
     allCategories?.length>0?allCategories.map(category=>( 
     <div className="border rounded m-5 p-2" droppable="true" onDragOver={e=>dragOver(e)}   onDrop={e=>videoDrop(e,category.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{category.categoryName}</h3>
          <button className='btn' onClick={()=>removeCategory(category.id)}><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
             <Row>
              {
               category?.allVideos?.length>0?category.allVideos.map(card=>(
                <Col sm={12} draggable onDragStart={e=>videodragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}/>
                </Col>
               )):null
              }
             </Row>

      </div>
      
    )):<p className='text-danger fw-bolder'>nothing to display</p>
      }
    </>
  )
}

export default Category
