import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"


//register API
export const registerAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

//Login API
export const loginAPI = async (user) => {
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

//add-recipeApi
export const addRecipeAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/add-recipe`,reqBody,reqHeader)
}

//all-datas
export const getAllRecipeDatas = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/get-explore-data`,"","")
}

//user-specific-datas
export const getUserSpecificDatas = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/get-user-data`,"",reqHeader)
}

//user's-specific-datas
export const getUserDetails = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/get-user-details`,"",reqHeader)
}

//settingComments
export const settingComments = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/update-comments`, reqBody, reqHeader);
}

//getting comments
// export const gettingComments = async (reqBody)=>{
//     return await commonAPI("GET",`${SERVER_URL}/gettingCommentsBack`,reqBody,"")
// }

//updating descriptions
export const updateDesc = async (reqBody) => {
    return await commonAPI("PUT", `${SERVER_URL}/updateDesc`, reqBody,"");
}

//posting-user-saved-datas
export const setUserSavedDatas = async (reqBody,reqHeader) =>{
    return await commonAPI("PUT",`${SERVER_URL}/updateSaved`,reqBody,reqHeader)
}

//getting saved datas
export const gettingSavedDatas = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/savedDatas`,"",reqHeader)
} 

//filter on itemName
export const gettingwithItem = async (reqBody) => {
    return await commonAPI("POST",`${SERVER_URL}/getbyname`,reqBody,"")
}

//filter on userName
export const gettingwithUser= async (reqBody) => {
    return await commonAPI("POST",`${SERVER_URL}/getonUser`,reqBody,"")
}

//remove posts
export const deletePost = async (projectId,reqHeader) =>{
    return await commonAPI('DELETE',`${SERVER_URL}/remove-post/${projectId}`,{},reqHeader)
}

//remove saved data
export const deleteSaved = async (projectId,reqHeader) =>{
    return await commonAPI('DELETE',`${SERVER_URL}/remove-saved-data/${projectId}`,{},reqHeader)
}

