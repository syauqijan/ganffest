import React from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';
import Footer from '../Footer';

type MainLayoutProps = {
    children: React.ReactNode
}
const disableNavbars = ['/404'];
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
        <Footer />
      </div>
      
      
    
    
  )
}

export default MainLayout