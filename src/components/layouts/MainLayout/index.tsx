import React from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';
import Footer from '../Footer';

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
        <div>
          <main>
            {!disableNavbars.includes(pathname) && <Navbar />}
            {children}
          
          </main>
        </div>
        {!disableFooters.includes(pathname) && <Footer />}
        
      </div>
      
      
    
    
  )
}

export default MainLayout