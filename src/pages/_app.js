import '../../styles/custom.css'
import Navbar from '../components/main-components/Navbar'
import { wrapper } from '../store'
import { store } from '../store'
import { Provider } from 'react-redux'
import ProtectedRoute from '../components/ProtectedRoute'
import { useRouter } from 'next/router'

const noAuth = ['/', '/auth/signin', '/auth/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Provider store={store}>
        {
          noAuth.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Navbar />
              <Component {...pageProps} />
            </ProtectedRoute>
          )
        }
      </Provider>
    </>
  )

}

export default MyApp
