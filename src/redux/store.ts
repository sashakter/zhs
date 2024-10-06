import { configureStore } from '@reduxjs/toolkit'
import postClientSlice from './slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      post: postClientSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
