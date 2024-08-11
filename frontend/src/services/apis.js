const BASE_URL = "http://localhost:5000/api/v1"

// AUTH 
export const authEndpoints = {
    LOGIN_API : BASE_URL + "/auth/login",
    SIGN_UP : BASE_URL + "/auth/signup",
}

// JOIN US 
export const joinUsEndpoints = {
    JOIN_US_API : BASE_URL + "/join/joinUs",
    GET_ALL_JOIN_US_MESSAGES : BASE_URL + "/join/getAllJoinUs",
}

// Notes APIS
export const notesEndpoints = {
    GET_ALL_NOTES : BASE_URL + "/notes/getNotes",
}

// Rating and Reviews 
export const testimonials = {
    CREATE_RATING : BASE_URL + "/testimonials/createRatingAndReviews",
    GET_ALL_RATINGS : BASE_URL + "/testimonials/getAllRatings"
}