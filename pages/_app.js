import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Provider, useSelector } from 'react-redux'
import Layout from '../components/layout'
import { getAuthAction } from '../store/actions/root.actions'
import wrapperStore from '../store/store'
import { getAuthThunk } from '../store/thunk/root.thunk'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let authData = useSelector(state => state.root.auth)
  let isAuth = useSelector(state => state.root.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthAction())

  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapperStore.withRedux(MyApp)
