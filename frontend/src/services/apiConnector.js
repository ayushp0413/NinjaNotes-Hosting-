// import axios from "axios";
// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {

//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data:bodyData ? bodyData : null,
//         headers:headers ? headers : null,
//         params: params ? params: null,
//     })

// }

import axios from "axios";
import toast from "react-hot-toast";
export const axiosInstance = axios.create({
    baseURL: "https://ninjanotesv1.onrender.com/api/v1",
    // timeout: 10000, // 5 seconds timeout
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const apiConnector = async (method, url, bodyData, headers, params) => {
    try {
        const response = await axiosInstance({
            method:`${method}`,
            url:`${url}`,
            data:bodyData ? bodyData : null,
            headers:headers ? headers : null,
            params: params ? params: null,
        });
        return response;
     } 
     catch (error) {
            console.error(`API Error (${method} ${url}):`, error?.response?.data?.message);
            toast.error(error?.response?.data?.message);
            if (error?.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              throw new Error(error?.response?.data?.message || 'Server error');
            } else if (error?.request) {
              // The request was made but no response was received
              throw new Error('No response from server. Please check if server is running.');
            } else {
              // Something happened in setting up the request
              throw new Error('Failed to make request');
            }
          }

}