// we are chicking the type of action

const INIT_STATE = {
    carts: []  //all the data stores inside the array
};

// now we create reducer function...

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

       
        // const ItemIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        // if(ItemIndex >=0){
        //     let qun = 1;
        //     state.carts[ItemIndex].qun += 1;
        // }else{
        //     const temp = { ...action.payload,qun:1 }
        //     return {
        //         ...state, 
        //         carts: [...state.carts, temp]
        //     }
        // }

            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case "RMV_CART":
            const data = state.carts.filter((element)=>element.id !== action.payload);

            return{
                ...state,
                carts:data
            }
        default:
            return state
    }
}

