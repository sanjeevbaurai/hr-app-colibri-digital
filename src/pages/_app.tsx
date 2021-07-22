import React from 'react';
import { AppProps } from 'next/app';

// import { Header, Foote
const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
        <Component {...pageProps} />
    </>
  );
};

export default App;
