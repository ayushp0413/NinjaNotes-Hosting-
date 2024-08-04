import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { joinUsEndpoints } from "../apis"

const { JOIN_US_API } = joinUsEndpoints;


export const joinUs = async(formData) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("POST", JOIN_US_API, formData);
        console.log("RESPONSE of JOIN US API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }

        toast.success(response?.data?.message || "Message Saved");  


    }catch(err)
    {
        console.log("JOIN US API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
}