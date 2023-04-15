import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch("https://redux-http-299ef-default-rtdb.firebaseio.com/cartItems.json");
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            if(cartData.itemsList)
            dispatch(cartActions.replaceData(cartData));
        }
        catch (ex) {
            dispatch(uiActions.showNotification({
                open: true,
                message: "Fail to send request to database",
                type: "error"
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending request",
            type: "warning"
        }));
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending request to database successfully",
                type: "success"
            }));
        try {
            fetch("https://redux-http-299ef-default-rtdb.firebaseio.com/cartItems.json", {
                method: "PUT",
                body: JSON.stringify(cart)
            })
                .then(res => res.json)
                .then(data => {
                    dispatch(uiActions.showNotification({
                        open: true,
                        message: "Sending request to database successfully",
                        type: "success"
                    }));
                })
        } catch (ex) {
            dispatch(uiActions.showNotification({
                open: true,
                message: "Fail to send request to database",
                type: "error"
            }));
        }
    }
}