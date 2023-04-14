import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [

        ],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // // check if item is already in cart
            const existingItem = state.itemsList.find(item => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+= newItem.price;
            }
            else{
                state.itemsList.push({...newItem, quantity:1, totalPrice:newItem.price});
                state.totalQuantity ++;
            }
        },
        removeFromCart() {

        },
        setShowCart(state) {
            state.showCart = true
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;