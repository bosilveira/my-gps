import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = createAsyncThunk(
    "getToken",
    async () => {
        try {
          const value = await AsyncStorage.getItem('@token')
          if(value !== null) {
            return ''
          }
          return value
        } catch(e) {
          // error reading value
        }
    }
  );


const initialState = {
    token: '',
    loading: false
 } as any;

 const dataSlice = createSlice({
    name: "start",
    initialState,
    reducers: {
      search: (state, action) => {
        state.loading = true;
        state.params = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });
  
      builder.addCase(getData.pending, (state, action) => {
        state.loading = true;
      });
    },
  });
  
  export const { search } =  dataSlice.actions;
  
  export default dataSlice.reducer;