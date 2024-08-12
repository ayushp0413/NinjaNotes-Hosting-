import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { authEndpoints} from "../apis"
import { setToken }  from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"


const {LOGIN_API , SIGN_UP, FORGOT_PASSWORD_API , RESET_PASSWORD_API} = authEndpoints;

export const singUp = async(formData, navigate) => {
    
    const toastId = toast.loading("Loading...");
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
        toast.error(error?.response?.data?.message);
    }
    toast.remove(toastId);
}

export const login = async(formData, navigate, dispatch) => {
    
    const toastId = toast.loading("Loading...");
    try
    {
        const response = await apiConnector("POST", LOGIN_API, formData);
        console.log("RESPONSE of LOGIN API : ", response);

        if (!response?.data?.message) {
            throw new Error(response?.data?.message)
        }

        toast.success(response?.data?.message || "Login Successfully"); 
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
        toast.error(error?.response?.data?.message);
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
  
export const forgotPassword = async(email) => {
    
    const toastId = toast.loading("Loading...");
    console.log("email : ", email);
    try
    {
        const response = await apiConnector("POST", FORGOT_PASSWORD_API, {email});
        console.log("RESPONSE of FORGOT PASSWORD API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        toast.success(response?.data?.message || "Check your Email"); 
        console.log("URL for reset Password : ", response?.data?.url);

    }catch(error)
    {
        console.log("FORGOT PASSWORD API ERROR............", error)
        toast.error(error)
    }
    toast.remove(toastId);
}

export const resetPassword = async(password, confirmPassword, token) => {
    
    const toastId = toast.loading("Loading...");
    console.log("PRINTING data : ", password, confirmPassword, token)

    try
    {
        const response = await apiConnector("POST", RESET_PASSWORD_API, {password, confirmPassword, token});
        console.log("RESPONSE of RESET PASSWORD API : ", response);

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        toast.success(response?.data?.message || "Password Updated Sussessfully"); 
        
    }catch(error)
    {
        console.log("RESET PASSWORD API ERROR............", error)
        toast.error(error)
    }
    toast.remove(toastId);
}
