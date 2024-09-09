import toast from "react-hot-toast";
import { papersEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const { GET_PAPERS } = papersEndpoints;

export const getPapersForSubject = async(course,examType,branch,sem,subject) => {
    
    const toastId = toast.loading("Loading...");
    let result=[];
    try
    {
        const response = await apiConnector("GET", `${GET_PAPERS}/${course}/${examType}/${branch}/${sem}/${subject}`, null);
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
        console.log("Error while fetching papers", err);
        toast.error(err);
    }
    toast.remove(toastId);
    return result;
}