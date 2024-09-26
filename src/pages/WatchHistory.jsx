
import React, { useEffect, useState } from 'react'
import {Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI';


function WatchHistory() {

  const [history,setHistory] = useState([]);

  useEffect(()=>{
    getHistory();
  },[])

  const getHistory = async () => {
    const result = await getVideoHistoryAPI();
    console.log(result);
    if(result.status == 200){
      setHistory(result.data);
    }
    else{
      console.log("API Failed");
      console.log(result.message);
      
      
    }
    
  }

  console.log(history);
  const removeHistory=async(id)=>{
    await deleteVideoHistoryAPI(id)
    getHistory();
  }

  

  return (
    <>  

      <div className="container d-flex align-items-center justify-content-between mt-5">
        <h2 className='mt-3 ms-3'>Watch History</h2>

      <Link to={'/home'} style={{textDecoration:'none',color:'violet',fontSize:'30px'}} className='mt-2'>
      Back to Home<i class="fa-solid fa-rotate-left fa-beat-fade ms-1"></i>
      </Link>
      </div>

      <div className="container jutify-content-center mt-5 mb-5">
      <Table className='fs-5 w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            history?.length>0?history.map((video,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{video.title}</td>
              <td><a href={video.link} target='_blank'>{video.link}</a>
              </td>
              <td>{video.timeStamp}</td>
              <td><button onClick={()=>removeHistory(video.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
            </tr>
            )):<p className='text-danger fw-bold'>Nothing to Display</p>
          }

        </tbody>
      </Table>
      </div>
    </>
  )
}

export default WatchHistory