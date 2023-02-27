

const initState = {
    cartArr: []
};
const rootReducer = (state = initState,action) => {
    switch (action.type)
    {
        case 'cart/addCart':
            const productInCart = state.cartArr.find(
                (p)=> p.id === action.payload.id
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
                    (obj)=> obj.id = action.payload.id
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
                (obj)=> obj.id = action.payload.id
            );
            newCart.splice(objIdex,1)
            return {cartArr:[...newCart]}; 
        default:
            return state;
    }
}

export default rootReducer;