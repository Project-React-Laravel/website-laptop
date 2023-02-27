export const addCart = (product) =>{
    return{
        type: 'cart/addCart',
        payload:product
    }
}

export const deleteCart = (product) =>{
    return{
        type: 'cart/deleteCart',
        payload:product
    }
}