import React from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';
import Footer from '../Footer';
import Head from 'next/head';

type MainLayoutProps = {
    children: React.ReactNode
}
const disableNavbars = ['/404'];
const disableFooters = ['/404', '/auth/login', '/auth/register'];  
const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;
    const {pathname} = useRouter();
  
  return (
    
      <div className='container'>
        <Head>
          <link rel="icon" href="/gffhead.png" type="image/png"/>
        </Head>
        <div>
        {!disableNavbars.includes(pathname) && <Navbar />}
          <main>
            {children}
          
          </main>
        </div>
        {!disableFooters.includes(pathname) && <Footer />}
        
      </div>
      
      
    
    
  )
}

export default MainLayout