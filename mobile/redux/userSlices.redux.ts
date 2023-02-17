import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async () => {
    let errorFlag = false
    const data = await fetch('http://192.168.1.4:3000/users', {
      method: 'GET',
      //headers: {
      //  'Content-Type': 'application/json',
      //},
      //body: JSON.stringify({email: email}),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error('Status Error')
        } else {
          return response.json()
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        errorFlag = true
      });

      if (errorFlag) {
        throw Error('Fetch Error')
      } else {
        return data;
      }
    }
);

export const getUser = createAsyncThunk(
    "user/getUser",
    async (id: string) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/user/'+id, {
        method: 'GET',
        //headers: {
        //  'Content-Type': 'application/json',
        //},
        //body: JSON.stringify({email: email}),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw Error('Status Error')
          } else {
            return response.json()
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          errorFlag = true
        });
  
        if (errorFlag) {
          throw Error('Fetch Error')
        } else {
          return token;
        }
  
      }
  );

  export const postUser = createAsyncThunk(
    "user/posttUser",
    async ( { name, email }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then((response) => {
          if (response.status !== 201) {
            throw Error('Status Error')
          } else {
            return response.json()
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          errorFlag = true
        });
  
        if (errorFlag) {
          throw Error('Fetch Error')
        } else {
          return token;
        }
    }
  );


  export const patchUser = createAsyncThunk(
    "user/patchtUser",
    async ( { id, available, status }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/user/'+id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({available, status}),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw Error('Status Error')
          } else {
            return response.json()
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          errorFlag = true
        });
  
        if (errorFlag) {
          throw Error('Fetch Error')
        } else {
          return token;
        }
    }
  );



const initialState = {
    list: '',
    user: {} as any,
    updated: false,
    loading: false,
    error: false,
 } as any;

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

      search: (state, action) => {
        state.loading = true;
        state.params = action.payload;
      },

    },
    extraReducers: (builder) => {

    // GET USERS
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.list = action.payload
        console.log('users json', JSON.stringify(action.payload))
        //state.token = action.payload;
      });
  
      builder.addCase(getUsers.pending, (state, action) => {
        state.loading = true;
        console.log('users pending', action.payload)
      });

      builder.addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('users error', action.payload)
      });


    // GET USER[id]
    builder.addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(getUser.pending, (state, action) => {
        state.loading = true;
        console.log('user pending', action.payload)
      });

      builder.addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('user error', action.payload)
      });


    // POST USER
    builder.addCase(postUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('post user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(postUser.pending, (state, action) => {
        state.loading = true;
        console.log('post user pending', action.payload)
      });

      builder.addCase(postUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('post user error', action.payload)
      });

    // PATCH USER
    builder.addCase(patchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('patch user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(patchUser.pending, (state, action) => {
        state.loading = true;
        console.log('patch user pending', action.payload)
      });

      builder.addCase(patchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('patch user error', action.payload)
      });


    },
  });
  
  export const { search } =  userSlice.actions;
  
  export default userSlice.reducer;