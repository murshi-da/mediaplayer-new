import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// Upload video API

export const uploadVideoAPI =async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}


// getAllUpload videos API


export const getAllVideosAPI =async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

// getAvideo API

export const getAVideoAPI =async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}


// delete videoAPI
export const deleteVideoAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}




// add Video History

export const addVideoHistoryAPI =async(video)=>{
 return await commonAPI("POST",`${server_url}/history`,video)
}

// getVideoHistory

export const getVideoHistoryAPI =async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deleteVideoHistory

export const deleteVideoHistoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


// add category api
export const addCategoryAPI =async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
   }


// get category 
export const getCategoryAPI =async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

// delete category
export const deleteCategoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}


// update category

export const updateCategoryAPI =async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}