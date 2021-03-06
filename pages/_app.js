import '../styles/globals.css'
import "animate.css/animate.min.css";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { useEffect } from 'react';
gsap.registerPlugin(CSSPlugin)
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
