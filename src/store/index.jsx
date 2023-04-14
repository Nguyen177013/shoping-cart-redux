import { configureStore, createSlice } from "@reduxjs/toolkit";

//  This way is good
// const reducerFn = (state = { counter: 10 }, action) => {
//     // synchronous function
//     // we should not mutate the origin state
//     switch (action.type) {
//         case "INC":
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             };
//         case "DEC":
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case "ADD":
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         default:
//             return state;
//     }
// }
//  But this is better
const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            state.counter -= 1;
        },
        add(state, action) {
            state.counter += action.payload;
        }
    }
})
// const store = configureStore({ reducer: reducerFn });
export const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;