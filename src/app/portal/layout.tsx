"use client"
import React, { useEffect, useLayoutEffect, createContext, useState } from 'react'
import Header from './header'
import Navbar from './navbar'
import { Breadcrumbserviceprovider } from '@app/providers/Breadcrumbserviceprovider';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { Preloader } from '@app/providers/Pagepreloader';
import Footer from '../landing-page/partials/partials/Footer';

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavBar, setShowNavBar] = useState(true)
  const currentPath = usePathname()
  const { data } = useSession()

  useLayoutEffect(() => {
    if (currentPath.includes("/filings")) {
      setShowNavBar(false)
    } else {
      setShowNavBar(true)
    }
  }, [currentPath])

  return <>
    <Header />
    {showNavBar && <Navbar />}
    <section className='bg-gray-50/60 pb-4 min-h-screen'>
      <Breadcrumbserviceprovider>
        {children}
      </Breadcrumbserviceprovider>
    </section>
    <Footer/>
    </>
}

export default Layout