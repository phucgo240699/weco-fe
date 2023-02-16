
import { RootState, store } from 'store'
import { useSelector } from 'react-redux'

function useRootSelector() {
  return useSelector(store.getState)
}

export const authSelector = (state: RootState) => state.authentication.auth;

export default useRootSelector