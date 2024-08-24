import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";
import {setToken} from "../../slices/authSlice"
import {setUser} from "../../slices/profileSlice"
import {resetCart} from "../../slices/cartSlice"


const {GET_USER_DETAILS_API , UPDATE_PROFILE_API, UPDATE_PROFILE_PICTURE_API, DELETE_PROFILE_API} = profileEndpoints;

export const getUserDetails = async(token) => {
    
    const toastId = toast.loading("Loading...");
    console.log("Token in services : ", token);
    let result = [];
    try
    {
        const response = await apiConnector("POST", 
            GET_USER_DETAILS_API ,
            {token},
            {
                 'Authorization': `Bearer ${token}`
            },
        );
        console.log("RESPONSE of GET USER API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
 
        result = response?.data?.data;        

    }catch(err)
    {
        console.log("GET USER API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
    return result;
}

export const updateProfile = async(formData, token, dispatch) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("PUT", 
            UPDATE_PROFILE_API,
            formData,
            {
                'Authorization':`Bearer ${token}`
            },
        );
        console.log("RESPONSE of UPDATE PROFILE API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
          toast.success("Profile Details Updated");
        
        const userImage = response.data?.data?.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.name}`
        dispatch(setUser({...response?.data?.data, image:userImage}));

        localStorage.setItem("user", JSON.stringify(response.data.data))
          

    }catch(err)
    {
        console.log("UPDATE PROFILE API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
}

export const updateProfilePicture = async(formData, token) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("PUT", 
          UPDATE_PROFILE_PICTURE_API,
          formData,
          {
            "Content-Type": "multipart/form-data",
            Authorization:`Bearer ${token}`,
          }
        );
        console.log("RESPONSE of UPDATE PROFILE PICTURE API : ", response?.data?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
          toast.success("Profile Picture Updated Successfully");

    }catch(err)
    {
        console.log("UPDATE PROFILE PICTURE API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
}

export const deleteProfile = async(token, dispatch, navigate) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("DELETE", 
           DELETE_PROFILE_API,
            {token},
            {
                'Authorization':`Bearer ${token}`
            },
        );
        console.log("RESPONSE of DELETE PROFILE API : ", response?.data);

        if (!response.data.success) {
            throw new Error(response.data.message)
          }
        
          toast.success("Account Deleted!");
          navigate("/home");
          dispatch(setToken(null));
          dispatch(setUser(null));
          dispatch(resetCart());
          localStorage.removeItem("token")
          localStorage.removeItem("user")

    }catch(err)
    {
        console.log("DELETE PROFILE API ERROR............", err)
        toast.error(err);
    }
    toast.remove(toastId);
}

