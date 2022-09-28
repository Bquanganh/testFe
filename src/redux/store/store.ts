import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { productSlice } from '../sliceReducer/productSlice'
import { sumProductSlice } from '../sliceReducer/sumPriceSlice'

const store = configureStore({
    reducer:{
        products:productSlice.reducer,
        sumPrice:sumProductSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store