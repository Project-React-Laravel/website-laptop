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

export const increaseQty = (product) =>{
    return{
        type: 'cart/increaseQty',
        payload:product
    }
}

export const decreaseQty = (product) =>{
    return{
        type: 'cart/decreaseQty',
        payload:product
    }
}