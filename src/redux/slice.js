import { createSlice } from '@reduxjs/toolkit'
import { postClientsForm } from './operation'

const postClientSlice = createSlice({
  name: 'post',
  initialState: {
    clients: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCount(state, action) {
      state.clients = new Array(action.payload).fill(null)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postClientsForm.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(postClientsForm.fulfilled, (state, action) => {
        state.isLoading = false
        state.clients = action.payload
      })
      .addCase(postClientsForm.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export const { setCount } = postClientSlice.actions // Експортуйте action
export default postClientSlice.reducer
