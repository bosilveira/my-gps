import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLoginData = createAsyncThunk(
  "login/storeData",
  async (data: any) => {
  let errorFlag = false
  try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@loginData', jsonValue)
  } catch (e) {
    if (errorFlag) throw Error('Storage Error');
  }
});


export const loadLoginData = createAsyncThunk(
  "login/loadData",
   async () => {
  let errorFlag = false
  try {
    const jsonValue = await AsyncStorage.getItem('@loginData')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    if (errorFlag) throw Error('Storage Error');
  }
});

export const getToken = createAsyncThunk(
  "login/getToken",
  async (email: string) => {
    let errorFlag = false
    const token = await fetch('http://192.168.1.4:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email}),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error('Status Error')
        } else {
          return response.json()
        }
      })
      .then((data) => {
        return data.token;
      })
      .catch((error) => {
        errorFlag = true
      });

      if (errorFlag) {
        throw Error('Login Error')
      } else {
        return token;
      }

    }
    );

const initialState = {
    token: '',
    loading: false,
    fetchError: false,
    storageError: false,
    stored: false,
    logged: false,
 } as any;

 const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {

      logout: (state) => {
        state.loading = false;
        state.fetchError = false;
        state.storageError = false,
        state.token = '';
        state.logged = false;
      },

    },
    extraReducers: (builder) => {

      builder.addCase(getToken.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchError = false;
        state.logged = true;
        state.token = action.payload;
        state.storageError = false;
        storeLoginData({state})
      });
  
      builder.addCase(getToken.pending, (state, action) => {
        state.loading = true;
      });

      builder.addCase(getToken.rejected, (state, action) => {
        state.loading = false;
        state.fetchError = true;
        state.logged = false;
        state.token = "error";
      });

      builder.addCase(storeLoginData.fulfilled, (state, action) => {
        state.stored = true;
      });

      builder.addCase(storeLoginData.rejected, (state, action) => {
        state.storageError = true;
      });

      builder.addCase(loadLoginData.rejected, (state, action) => {
        state.storageError = true;
      });


    },
  });
  
  export const { logout } =  loginSlice.actions;
  
  export default loginSlice.reducer;