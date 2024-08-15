import {toast} from "react-hot-toast"
import { notesEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const { GET_ALL_NOTES, GET_ALL_SPECIAL_NOTES_API } =  notesEndpoints 

export const getNotesForSubjects = async(course, branch, sem , subject, unit) => {
    
    const toastId = toast.loading("Loading...");
    let result = [];
    try
    {
        const response = await apiConnector("GET", `${GET_ALL_NOTES}/${course}/${branch}/${sem}/${subject}/${unit}`, null);
        console.log("RESPONSE of GET NOTES API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
        if(!response?.data?.data.length <= 0) {
            toast.success(response?.data?.message || "DONE");  
        }
        result = response?.data?.data;
        
    }catch(err)
    {
        console.log("NOTES API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
    return result;
}

export const getAllSpecialNotes = async() => {
    
    const toastId = toast.loading("Loading...");
    let result = [];
    try
    {
        const response = await apiConnector("GET", GET_ALL_SPECIAL_NOTES_API, null);
        console.log("RESPONSE of GET SPECIAL NOTES API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
        result = response?.data?.data;
        
    }catch(err)
    {
        console.log("SPECIAL NOTES API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
    return result;
}