import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { TYPE_OF_CONTENT } from "../utils/constants";

const user = JSON.parse(localStorage.getItem("user")); // parse the user 
const userId = user?._id;
const initialState = {
  cart: userId && localStorage.getItem(`cart_${userId}`) ? 
        JSON.parse(localStorage.getItem(`cart_${userId}`)) 
        : [],
    totalItems: userId && localStorage.getItem(`totalItems_${userId}`) ?
        JSON.parse(localStorage.getItem(`totalItems_${userId}`)) :
        0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        addToCart: (state, action) => 
        {
            const { item, userId } = action.payload;  // receive userId
            if(item.type === TYPE_OF_CONTENT.NOTES) {
                const index = state.cart.findIndex((it) => it._id === item._id); // check duplicate
                if(index >= 0) {
                    toast.error("Notes already saved");
                    return;
                }
            } else if(item.type === TYPE_OF_CONTENT.PAPERS) {
                const index = state.cart.findIndex((it) => it?._id === item?._id);
                if(index >= 0) {
                    toast.error("Paper already saved");
                    return;
                }
            }

            state.cart.push(item);
            state.totalItems++;

            // Save cart data for this user in localStorage
            localStorage.setItem(`cart_${userId}`, JSON.stringify(state.cart));
            localStorage.setItem(`totalItems_${userId}`, JSON.stringify(state.totalItems));

            toast.success("Item Saved to Profile");
        },

        removeFromCart: (state, action) => 
        {
            const { id } = action.payload;  // receive userId
            const user = JSON.parse(localStorage.getItem("user")); // parse the user 
            const uid = user?._id;

            const index = state.cart.findIndex((item) => item._id === id);
            if (index >= 0) {
                state.totalItems--;
                state.cart.splice(index, 1);  // delete 1 item

                localStorage.setItem(`cart_${uid}`, JSON.stringify(state.cart));
                localStorage.setItem(`totalItems_${uid}`, JSON.stringify(state.totalItems));

                toast.success("Item removed successfully");
            }
        },

        resetCart: (state, action) => 
        {
            const { userId, preserveLocalStorage } = action.payload;  // receive userId and preserveLocalStorage flag
            // Clear Redux state
            
            // If `preserveLocalStorage` is false, clear the data from localStorage
            if (!preserveLocalStorage) {
                state.cart = [];
                state.totalItems = 0;
                localStorage.removeItem(`cart_${userId}`);
                localStorage.removeItem(`totalItems_${userId}`);
            }
        },

        // Load the cart for a specific user
        loadCart: (state, action) => {
            const { userId } = action.payload;
            const savedCart = localStorage.getItem(`cart_${userId}`);
            const savedTotalItems = localStorage.getItem(`totalItems_${userId}`);

            state.cart = savedCart ? JSON.parse(savedCart) : [];
            state.totalItems = savedTotalItems ? JSON.parse(savedTotalItems) : 0;
        },

        // for setting from login services
        setCart: (state, action) => {
            state.cart = action.payload.cart;
            state.totalItems = action.payload.totalItems;
            const {userId} = action.payload;
      
            // Optionally update localStorage as well to persist
            localStorage.setItem(`cart_${userId}`, JSON.stringify(state.cart));
            localStorage.setItem(`totalItems_${userId}`, JSON.stringify(state.totalItems));
        }
    },
});

export const { addToCart, removeFromCart, resetCart, loadCart , setCart} = cartSlice.actions;
export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";
// import { TYPE_OF_CONTENT } from "../utils/constants";

// const initialState = {
//     cart: localStorage.getItem("cart") ?
//     JSON.parse(localStorage.getItem("cart")) :
//     [],

//     // quantity
//     totalItems: localStorage.getItem("totalItems") ?
//     JSON.parse(localStorage.getItem("totalItems")) :
//     0, 
// }

// const cartSlice = createSlice({
//     name:"cart",
//     initialState:initialState,
//     reducers:{

//         addToCart : (state , action) => {
//             const item = action.payload;   // give object        
//             if(item.type === TYPE_OF_CONTENT.NOTES )  
//             {
//                 const index = state.cart.findIndex((it) => it._id === item._id); // check duplicate
//                 if(index >= 0)
//                 {
//                     toast.error("Notes already saved");
//                     return;
//                 }
//             }
//             else if(item.type===TYPE_OF_CONTENT.PAPERS)
//             {
//                 const index = state.cart.findIndex((it) => it?._id === item?._id);
//                 if(index >= 0)
//                 {
//                     toast.error("Paper already saved");
//                     return;
//                 }
//             }

//             state.cart.push(item);
//             state.totalItems++;
            
//             // store in localStorage
//             localStorage.setItem("cart", JSON.stringify(state.cart));
//             localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

//             toast.success("Item Saved to Profile");
//         } ,

//         // delete from id
//         removeFromCart: (state, action) => {
//             const id = action.payload;
//             const index = state.cart.findIndex((item) => item._id === id);
//             if(index >= 0) {
//                 // delete from cart
//                 state.totalItems--;
//                 state.cart.splice(index, 1); // delete 1 item

//                 localStorage.setItem("cart", JSON.stringify(state.cart))
//                 localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

//                 toast.success("Item removed successfully");
//                 return; 
//             }
//         },
//         resetCart: (state) => {
//             state.cart=[];
//             state.totalItems=0;

//             localStorage.removeItem("cart");
//             localStorage.removeItem("totalItems");
//         },
//     },
// });

// export const {addToCart, removeFromCart, resetCart} = cartSlice.actions 
// export default cartSlice.reducer;