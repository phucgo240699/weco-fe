
import { RootState, store } from 'store'
import { useSelector } from 'react-redux'

function useGlobalSelector() {
  return useSelector(store.getState)
}

export const authSelector = (state: RootState) => state.authentication.auth;

export default useGlobalSelector