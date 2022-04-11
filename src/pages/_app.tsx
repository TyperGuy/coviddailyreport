import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../styles/Global.styles';
import '../styles/globals.css';

interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  return <><Component {...pageProps} /><GlobalStyles/></>;
}

export default MyApp;
