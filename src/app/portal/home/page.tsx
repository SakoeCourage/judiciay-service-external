"use client"
import React, { useEffect, useState } from 'react'
import Statscard from './partials/statscard'
import { useSession } from 'next-auth/react'
import Api from '@app/app/fetch/axiosInstance'
import { AxiosResponse } from 'axios'
import { toastnotify } from '@app/providers/Toastserviceprovider'


interface counts {
  documents: number,
  queries: number
}
interface unreadCountDto {
  success: boolean,
  counts: counts
}

function page() {
  const { data } = useSession()
  const [unreadCounts, setUnreadCounts] = useState<counts>({} as counts)


  useEffect(() => {
    Api.get('/client/documents/dashboard-counts')
      .then((res: AxiosResponse<unreadCountDto>) => {
        setUnreadCounts(res.data.counts)
      })
      .catch(err => {
        toastnotify("Failed to fetch some data")
      })
  }, [])

  return (
    <div className=' container mx-auto '>
      <nav className=' py-2 text-xl text-gray-600 px-1 mb-3'>
        <span>Welcome</span>, <span className=' inline-block font-semibold text-[var(--primary-blue)] '>
          {data?.user?.surname} {data?.user?.otherNames}
        </span>
      </nav>

      <div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Statscard
          className='bg-indigo-100'
          theme='#3b82f6'
          actionText='Start New Application'
          iconBg='#3b82f6'
          link='/portal/filings/new-file'
          icon='fluent:tab-new-24-filled'
          captions='
          The program incentivizes individuals and businesses to voluntarily disclose any undisclosed or underreported financial activities outside Ghana, offering participants several benefits.
          '
          title='VDP Application'
          quantity={""}
        />
        <Statscard
          className='bg-sky-100'
          theme='#0284c7'
          actionText='My Disclosures'
          iconBg='#0284c7'
          link='/portal/filings'
          icon='fluent:task-list-square-rtl-16-regular'
          title='Applied Disclosures'
          captions='See a list and status of all voluntary disclosures you have applied for'
          quantity={unreadCounts?.documents ?? "..."}
        />

        <Statscard
          className='bg-blue-100'
          theme='#3b82f6'
          actionText='Respond To Queries'
          iconBg='#3b82f6'
          link='/portal/queries'
          icon='mynaui:notification'
          captions='GRA would like to know more about your applicatoins. View and respond to queries if any'
          title='Application Queries'
          quantity={unreadCounts?.queries ?? "..."}
        />
  
      </div>

    </div>
  )
}

export default page