// creat a action define whent the btn is clicked the card item is added..
// when click on addToCart btn we trrigerd this function and we pass data throught payload..and type..
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// Remove cart

export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}