import '../styles/globals.css'
import HooksUseContext from  '../components/HooksUseContext'

function MyApp({ Component, pageProps }) {
  return (
    <HooksUseContext>
    <Component {...pageProps} />
  </HooksUseContext>
  )
}

export default MyApp
