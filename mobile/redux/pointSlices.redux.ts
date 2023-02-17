import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPoints = createAsyncThunk(
  "point/getPoints",
  async () => {
    let errorFlag = false
    const token = await fetch('http://192.168.1.4:3000/points', {
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

export const getPoint = createAsyncThunk(
    "point/getPoint",
    async (id: string) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/point/'+id, {
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

  export const postPoint = createAsyncThunk(
    "point/postPoint",
    async ( { name, email }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/points/', {
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


  export const patchPoint = createAsyncThunk(
    "point/patchPoint",
    async ( { id, available, status }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/point/'+id, {
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
    list: [] as any[],
    point: {} as any,
    updated: false,
    loading: false,
    error: false,
 } as any;

 const pointSlice = createSlice({
    name: "point",
    initialState,
    reducers: {

      search: (state, action) => {
        state.loading = true;
        state.params = action.payload;
      },

    },
    extraReducers: (builder) => {

    // GET POINTS
      builder.addCase(getPoints.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.userList = action.payload
        console.log('users fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(getPoints.pending, (state, action) => {
        state.loading = true;
        console.log('users pending', action.payload)
      });

      builder.addCase(getPoints.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('users error', action.payload)
      });


    // GET USER[id]
    builder.addCase(getPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(getPoint.pending, (state, action) => {
        state.loading = true;
        console.log('user pending', action.payload)
      });

      builder.addCase(getPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('user error', action.payload)
      });


    // POST USER
    builder.addCase(postPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('post user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(postPoint.pending, (state, action) => {
        state.loading = true;
        console.log('post user pending', action.payload)
      });

      builder.addCase(postPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('post user error', action.payload)
      });

    // PATCH USER
    builder.addCase(patchPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('patch user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(patchPoint.pending, (state, action) => {
        state.loading = true;
        console.log('patch user pending', action.payload)
      });

      builder.addCase(patchPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('patch user error', action.payload)
      });


    },
  });
  
  export const { search } =  pointSlice.actions;
  
  export default pointSlice.reducer;