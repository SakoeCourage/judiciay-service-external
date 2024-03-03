"use client"
import React from 'react'
import Link from 'next/link'
import IconifyIcon from '@app/components/ui/IconifyIcon'
import Image from 'next/image'
import Querylist from './queries/partials/querylist'
import { IQueryProp } from './queries/partials/queryitem'
import { Queries } from './queries/partials/querylist'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../components/ui/dropdown'
import { useSession } from 'next-auth/react'
import { handleSignOut } from '@app/providers/Authserviceprovider/userAuthentication'
import { Accountsmenu } from '../landing-page/partials/partials/Accountsmenu'

function NotificationDropDown({ queries }: { queries: IQueryProp[] }) {
  return <div className=' lg:max-h-[80vh] !z-[100] w-max max-w-[100dvw] overflow-y-scroll'>
    <Querylist queries={queries} />
  </div>
}

function Header() {
  const { status, data } = useSession()

  return < div className='border-b border-gray-300 bg-[var(--primary-blue)]' >
    <div className='flex items-center container  mx-auto justify-between lg:justify-evenly py-2 h-[var(--header-height)] '>
      <nav className='  flex items-start justify-center gap-1'>
        <Link href="/portal/home" className='object-contain h-[3rem] '>
          <Image className=' h-full w-full' src="/images/gra-logo.png" height={4000} width={400} quality={100} alt='gra-logo' />
        </Link>
        <nav className=' text-blue-100 flex  text-2xl font-semibold mx-auto my-auto lg:hiddne items-center justify-center h-full tracking-wider'>
          VDP
        </nav>
      </nav>
      <nav className=' text-blue-100 hidden  text-base font-semibold mx-auto my-auto lg:flex items-center justify-center h-full tracking-wider'>
        Voluntary Disclosure Program
      </nav>
      <nav className='!z-[100]'>
        {status === "authenticated" && <nav className=' flex items-center gap-1 lg:gap-5 ml-auto'>
          {/* Notification -------- */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <nav className=' !z-[100]  flex items-center justify-center relative'>
                <span className=' absolute inline-block h-2 w-2 aspect-square rounded-full bg-red-700 top-1 right-1'>
                  &nbsp;
                </span>
                <IconifyIcon className='bg-transparent text-blue-100' icon='basil:notification-outline' />
              </nav>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <NotificationDropDown queries={Queries} />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notification ends.............. */}
          <nav className='block lg:hidden'>
            <Accountsmenu />
          </nav>
          <nav className='lg:flex hidden items-center gap-3 text-blue-50'>
            <nav className='h-[2.0rem] w-[2.0rem] rounded-full bg-sky-600 flex items-center justify-center overflow-hidden object-cover'>
              <nav className=' overflow-hidden h-12 w-12 shadow  font-medium rounded-full  p-1 aspect-square uppercase flex items-center justify-center gap-[0.20rem]'>
                {data?.user?.surname.charAt(0)}.{data?.user?.otherNames.charAt(0)}
              </nav>
            </nav>
            <nav>
              {data?.user?.surname} {data?.user?.otherNames}
            </nav>
            <button onClick={handleSignOut} className="border-l border-white px-2">
              Logout
            </button>
          </nav>

        </nav>}
      </nav>

    </div>
  </div >
}


export default Header