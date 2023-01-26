import { PostType } from 'types/postsTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
  homePosts: {
    data: PostType[],
    isLoading: boolean
  }
}

const initialState : PostState = {
  homePosts: {
    data: [],
    isLoading: false
  }
}

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    adaptHomeScreenPosts: (state, action: PayloadAction<PostType[]>) => {
      state.homePosts.data = action.payload
    },
    addHomeScreenPosts: (state, action: PayloadAction<PostType[]>) => {
      state.homePosts.data.push(...action.payload)
    },
    showLoadingHomePosts: (state) => {
      state.homePosts.isLoading = true
    },
    closeLoadingHomePosts: (state) => {
      state.homePosts.isLoading = false
    },
    clearPostsReducer: (state) => {
      state.homePosts = {
        data: [],
        isLoading: false
      }
    }
  }
})

export const { adaptHomeScreenPosts,
              addHomeScreenPosts,
              showLoadingHomePosts,
              closeLoadingHomePosts,
              clearPostsReducer } = postsReducer.actions

export const postsSlices = postsReducer.actions

export default postsReducer.reducer