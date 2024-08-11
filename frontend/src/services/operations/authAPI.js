import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { authEndpoints} from "../apis"
import { setToken }  from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"


const {LOGIN_API , SIGN_UP} = authEndpoints;

export const singUp = async(formData, navigate) => {
    
    const toastId = toast.loading("Loading...");
    let result =[];
    try
    {
        const response = await apiConnector("POST", SIGN_UP, formData);
        console.log("RESPONSE of SIGN UP API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success(response?.data?.message || "Message Saved"); 
        navigate("/login");

    }catch(error)
    {
        console.log("SIGNUP API ERROR............", error)
        toast.error(error)
    }
    toast.remove(toastId);
}

export const login = async(formData, navigate, dispatch) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("POST", LOGIN_API, formData);
        console.log("RESPONSE of LOGIN API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success(response?.data?.message || "Message Saved"); 
        dispatch(setToken(response?.data?.token));
        
        const userImage = response.data?.exsistingUser?.image
        ? response.data.exsistingUser.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.exsistingUser.name}`
        dispatch(setUser({...response?.data?.exsistingUser, image:userImage}));

       
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.exsistingUser))

        console.log("ALL DONE ");
        navigate("/dashboard/myProfile");
        
    }catch(error)
    {
        console.log("LOGIN API ERROR............", error)
        toast.error(error)
    }
    toast.remove(toastId);
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      // dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/");
    }
}
  
