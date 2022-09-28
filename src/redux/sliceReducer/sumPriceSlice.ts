import { createSlice } from "@reduxjs/toolkit"

interface SumProduct {
    total: number
}
const initState:SumProduct ={
    total:0
}

export const sumProductSlice = createSlice({
    name: 'sumPrice',
    initialState: initState,
    reducers:{
        sumPayment:(state,action)=>{
            
        }
    }
})