const initState = {
    cartArr: []
};
const rootReducer = (state = initState,action) => {
    switch (action.type)
    {
        case 'cart/addCart':
            const productInCart = state.cartArr.find(
                (p)=> p.id_product === action.payload.id_product
            );
            if(!productInCart)
            {
                return{
                    ...state,
                    cartArr: [
                        ...state.cartArr, action.payload
                    ]
                }
            } else{
                let newCart = state.cartArr;
                const objIdex = newCart.findIndex(
                    (obj)=> obj.id_product = action.payload.id_product
                );
                if(newCart[objIdex].quantity === 1){
                    newCart[objIdex].quantity = 2;
                }else{
                    newCart[objIdex].quantity = newCart[objIdex].quantity + 1;
                }
                return {cartArr:[...newCart]};
            }
        case 'cart/deleteCart':
            let newCart = state.cartArr;
            const objIdex = newCart.findIndex(
                (obj)=> obj.id_product === action.payload.id_product
            );
            newCart.splice(objIdex,1)
            return {cartArr:[...newCart]}; 
        case 'cart/increaseQty':
            const newCart1 = [...state.cartArr];
            const objIndex1 = newCart1.findIndex(
                (obj)=> obj.id_product === action.payload.id_product
            );
            console.log(newCart1);
            if (objIndex1 >= 0) {
                newCart1[objIndex1] = {
                    ...newCart1[objIndex1],
                    quantity: newCart1[objIndex1].quantity + 1
                };  
            }
            return {cartArr: newCart1};
        case 'cart/decreaseQty':
            const newCart2 = [...state.cartArr];
            const objIndex2 = newCart2.findIndex(
                    (obj)=> obj.id_product = action.payload.id_product
            );
            if (objIndex2 >= 0) {
                newCart2[objIndex2] = {
                    ...newCart2[objIndex2],
                    quantity: newCart2[objIndex2].quantity - 1
                };  
            }
            return {cartArr: newCart2};
        default:
            return state;
    }
}

export default rootReducer;