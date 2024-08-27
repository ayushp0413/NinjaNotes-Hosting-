import {toast} from "react-hot-toast"
import { blogsEndpoints} from "../apis";
import { apiConnector } from "../apiConnector";

const { GET_ALL_BLOGS } = blogsEndpoints

export const getAllBlogs = async(query) => {
    
    const toastId = toast.loading("Loading...");
    let result = [];
    console.log("query at servces : ", query);
    try
    {
        let response;
        if(query){
             response = await apiConnector("GET", `${GET_ALL_BLOGS}?query=${query}`, null);
        }
        else{
            response = await apiConnector("GET", GET_ALL_BLOGS, null);
        }
        console.log("RESPONSE of GET Blogs API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
        if(!response?.data?.data.length <= 0) {
           console.log("Blogs fetched..")
        }
        result = response?.data?.data;
        
    }catch(err)
    {
        console.log("BLOGS API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
    return result;
}