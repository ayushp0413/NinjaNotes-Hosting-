import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-hot-toast";
import { TYPE_OF_CONTENT } from "../utils/constants";

const initialState = {
    cart: localStorage.getItem("cart") ?
    JSON.parse(localStorage.getItem("cart")) :
    [],

    // quantity
    totalItems: localStorage.getItem("totalItems") ?
    JSON.parse(localStorage.getItem("totalItems")) :
    0, 
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{

        addToCart : (state , action) => {
            const item = action.payload;   // give object        
            if(item.type === TYPE_OF_CONTENT.NOTES) 
            {
                const index = state.cart.findIndex((it) => it._id === item._id); // check duplicate
                if(index >= 0)
                {
                    toast.error("Notes already saved");
                    return;
                }
            }
            else if(item.type===TYPE_OF_CONTENT.PAPERS)
            {
                const index = state.cart.findIndex((it) => it?._id === item?._id);
                if(index >= 0)
                {
                    toast.error("Paper already saved");
                    return;
                }
            }

            state.cart.push(item);
            state.totalItems++;
            
            // store in localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

            toast.success("Item Saved to Profile");
        } ,

        // delete from id
        removeFromCart: (state, action) => {
            const id = action.payload;
            const index = state.cart.findIndex((item) => item._id === id);
            if(index >= 0) {
                // delete from cart
                state.totalItems--;
                state.cart.splice(index, 1); // delete 1 item

                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

                toast.success("Item removed successfully");
                return; 
            }
        },
        resetCart: (state) => {
            state.cart=[];
            state.totalItems=0;

            localStorage.removeItem("cart");
            localStorage.removeItem("totalItems");
        },
    },
});

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions 
export default cartSlice.reducer;