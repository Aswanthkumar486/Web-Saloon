import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '@/styles/globals.css';
import '@/styles/Home.module.css'// ✅ OK to import global CSS here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
