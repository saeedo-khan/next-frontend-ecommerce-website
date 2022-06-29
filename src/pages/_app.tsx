import React from 'react';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../../utility/createEmotionCache'
import { SessionProvider } from "next-auth/react";
import '../../styles/globals.css';

// context
import { AuthContextProvider } from '../context/auth/AuthContext'
import { CartContextProvider } from '../context/cart/CartContext';



interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


const clientSideEmotionCache = createEmotionCache()

const MyApp:React.FC<MyAppProps> = (props) => {

  const { Component, emotionCache = clientSideEmotionCache , pageProps } = props

  
  // const { global } = pageProps;
  return (
      <SessionProvider session={pageProps.session}>
      <CartContextProvider>
      <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <Layout>
                <Component {...pageProps} />
        </Layout>
      </CacheProvider>
      </AuthContextProvider>
      </CartContextProvider>
      </SessionProvider>

  )
}

export default MyApp




