import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async () => {
    let errorFlag = false
    const token = await fetch('http://192.168.1.4:3000/orders', {
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


export const getOrder = createAsyncThunk(
    "order/getOrder",
    async (id: string) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/order/'+id, {
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

  export const postOrder = createAsyncThunk(
    "order/postOrder",
    async ( { title, user }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, user}),
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


  export const patchOrder = createAsyncThunk(
    "order/pattchOrder",
    async ( { id, available, status }: any ) => {
      let errorFlag = false
      const token = await fetch('http://192.168.1.4:3000/order/'+id, {
        method: 'PATCH',
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
    action_list: [] as any,
    updated: false,
    loading: false,
    error: false,
 } as any;

 const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {

      search: (state, action) => {
        state.loading = true;
        state.params = action.payload;
      },

    },
    extraReducers: (builder) => {

    // GET Orders
      builder.addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log('orders fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(getOrders.pending, (state, action) => {
        state.loading = true;
        console.log('orders pending', action.payload)
      });

      builder.addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('orders error', action.payload)
      });


    // GET ORDER[id]
    builder.addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(getOrder.pending, (state, action) => {
        state.loading = true;
        console.log('user pending', action.payload)
      });

      builder.addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('user error', action.payload)
      });


    // POST ORDER
    builder.addCase(postOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('post user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(postOrder.pending, (state, action) => {
        state.loading = true;
        console.log('post user pending', action.payload)
      });

      builder.addCase(postOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('post user error', action.payload)
      });

    // PATCH ORDER
    builder.addCase(patchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload
        console.log('patch user fullfilled', action.payload)
        //state.token = action.payload;
      });
  
      builder.addCase(patchOrder.pending, (state, action) => {
        state.loading = true;
        console.log('patch user pending', action.payload)
      });

      builder.addCase(patchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log('patch user error', action.payload)
      });



    },
  });
  
  export const { search } =  orderSlice.actions;
  
  export default orderSlice.reducer;