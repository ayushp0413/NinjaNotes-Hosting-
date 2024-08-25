import {toast} from "react-hot-toast"
import { blogsEndpoints} from "../apis";
import { apiConnector } from "../apiConnector";

const { GET_ALL_BLOGS } = blogsEndpoints

export const getAllBlogs = async() => {
    
    const toastId = toast.loading("Loading...");
    let result = [];
    try
    {
        const response = await apiConnector("GET", GET_ALL_BLOGS, null);
        console.log("RESPONSE of GET Blogs API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
        if(!response?.data?.data.length <= 0) {
            toast.success(response?.data?.message || "DONE");  
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