import { Post } from 'types/posts';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
  homePosts: Post[]
}

const initialState : PostState = {
  homePosts: []
}

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    adaptHomeScreenPosts: (state, action: PayloadAction<Post[]>) => {
      state.homePosts = action.payload
    },
    addHomeScreenPosts: (state, action: PayloadAction<Post[]>) => {
      state.homePosts.push(...action.payload)
    }
  }
})

export const { adaptHomeScreenPosts, addHomeScreenPosts } = postsReducer.actions

export default postsReducer.reducer