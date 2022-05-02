import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import './styles.css';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nx-Demo!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
