import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setVideoResponse}) {

  const [allVideos,setAllVideos] = useState([]);

  const [deleteVideoResponse,setdeleteVideoResponse] = useState(false);

  // Calling getUploadedVideos() while loading the page
  useEffect(()=>{
    getUploadedVideos();
    setdeleteVideoResponse(false);
  },[uploadVideoResponse,deleteVideoResponse])


  // Function to get all videos from the server
  const getUploadedVideos = async () =>{
    const result = await getAllVideosAPI();
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data);
    }
    else{
      setAllVideos([]);
      console.log("API Failed");
    }
  }

  // console.log(allVideos);
  const videodragOver=(e)=>{
    e.preventDefault()
  }
  

const videoDropped =async(e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoId,categoryId);

  const {data}= await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result= selectedCategory.allVideos.filter(video=>video.id!==videoId)
  // console.log(result);

  let{id,categoryName}= selectedCategory
  let newCategory= {id,categoryName,allVideos:result}
  console.log(newCategory);
 const res= await updateCategoryAPI(categoryId,newCategory)
 setVideoResponse(res)
}

  return (
    <>
      <Row droppable="true" onDragOver={e=>videodragOver(e)}   onDrop={e=>videoDropped(e,video.id,category.id)}>
        {
          allVideos?.length>0?allVideos.map(video => (
            <Col sm={12} md={4} lg={4} xl={3} draggable onDragstarted={e=>videodragstarted(e,card.id,category.id)}>
            <VideoCard video={video} setdeleteVideoResponse={setdeleteVideoResponse}/>
            </Col>
          )):<p>Nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View
