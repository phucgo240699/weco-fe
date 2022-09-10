import { PostType } from 'types/postsTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
  homePosts: PostType[]
}

const initialState : PostState = {
  homePosts: []
}

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    adaptHomeScreenPosts: (state, action: PayloadAction<PostType[]>) => {
      state.homePosts = action.payload
    },
    addHomeScreenPosts: (state, action: PayloadAction<PostType[]>) => {
      state.homePosts.push(...action.payload)
    }
  }
})

export const { adaptHomeScreenPosts, addHomeScreenPosts } = postsReducer.actions

export default postsReducer.reducer