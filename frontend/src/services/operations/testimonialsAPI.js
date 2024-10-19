import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { testimonials } from "../apis";

const { CREATE_RATING, GET_ALL_RATINGS} = testimonials;


export const createTestimonial = async(formData) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("POST", CREATE_RATING, formData);
        console.log("RESPONSE of CREATE TESTIMONIALS API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }

        toast.success(response?.data?.message || "Rating & Reviews Submitted");  

    }catch(err)
    {
        console.log("CREATE TESTIMONIALS API ERROR............", err)
        toast.error(err);
        throw err;
    }
    toast.remove(toastId);
}

export const getAllTestimonials = async() => {
    
    let result = [];
    try
    {
        const response = await apiConnector("GET",GET_ALL_RATINGS,null);
        console.log("RESPONSE of GET TESTIMONIALS API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response?.data?.data;

    }catch(err)
    {
        toast.error("Loading...");
        console.log("GET TESTIMONIALS API ERROR............", err)
    }
    return result;
}