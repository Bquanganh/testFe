import { products } from './../../products';
import {createSlice} from '@reduxjs/toolkit'

interface ProductModel{
    products: any[],
    quantity:number,
    total:number
}

const initState ={
    products:[],
    quantity:0,
    total:0
}as ProductModel


export const productSlice =createSlice({
    name: 'products',
    initialState:initState ,
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload.product);
            state.total =state.products.reduce((total,cur)=>total+cur.price,0)
        },
        removeProduct:(state,action)=>{
            const index = state.products.findIndex((Item) => Item.id === action.payload.id)
            console.log('vitri',index)
            state.products.splice(index,1)
            state.quantity -=1;
            state.total=state.total-action.payload.price;
        }
    }
})

export const {addProduct,removeProduct} = productSlice.actions
export default productSlice.reducer
