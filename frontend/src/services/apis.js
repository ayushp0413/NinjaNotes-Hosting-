const BASE_URL = "http://localhost:5500/api/v1"

// AUTH 
export const authEndpoints = {
    LOGIN_API : BASE_URL + "/auth/login",
    SIGN_UP : BASE_URL + "/auth/signup",
    FORGOT_PASSWORD_API : BASE_URL + "/auth/forgotPassword",
    RESET_PASSWORD_API : BASE_URL + "/auth/resetPassword" 
}

// PROFILE APIS

export const profileEndpoints = {
    GET_USER_DETAILS_API : BASE_URL + "/profile/getUserDetails",
    UPDATE_PROFILE_API : BASE_URL + "/profile/updateProfile",
    UPDATE_PROFILE_PICTURE_API : BASE_URL + "/profile/updateProfilePicture",
    UPDATE_PASSWORD_API: BASE_URL + "/profile/updatePassword",
    DELETE_PROFILE_API : BASE_URL + "/profile/deleteProfile"
}

// JOIN US 
export const joinUsEndpoints = {
    JOIN_US_API : BASE_URL + "/join/joinUs",
    GET_ALL_JOIN_US_MESSAGES : BASE_URL + "/join/getAllJoinUs",
}

// Notes APIS
export const notesEndpoints = {
    GET_ALL_NOTES : BASE_URL + "/notes/getNotes",
    GET_ALL_SPECIAL_NOTES_API : BASE_URL + "/specialNotes/getSpecialNotes"
}

// Papers APIs
export const papersEndpoints = {
    GET_PAPERS : BASE_URL + "/papers/getPapers",
}


// Blogs APIS
export const blogsEndpoints = {
    GET_ALL_BLOGS : BASE_URL + "/blogs/getAllBlogs",
}


// Rating and Reviews 
// export const testimonials = {
//     CREATE_RATING: `${BASE_URL}/testimonials/createRatingAndReviews`,
//     GET_ALL_RATINGS: `${BASE_URL}/testimonials/getAllRatings`
// }

// Rating and Reviews 
export const testimonials = {
    CREATE_RATING: `${BASE_URL}/testimonials/createRatingAndReviews`,
    GET_ALL_RATINGS: `${BASE_URL}/testimonials/getAllRatings`
}