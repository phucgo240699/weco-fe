
import { store } from 'store'
import { useSelector } from 'react-redux'

function useGlobalSelector() {
  return useSelector(store.getState)
}

export default useGlobalSelector