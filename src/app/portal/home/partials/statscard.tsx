"use client"
import React from 'react'
import { formatnumber, formatcurrency } from 'app/app/lib/utils'
import Link from 'next/link'
import classNames from 'classnames'
import IconifyIcon from '@app/components/ui/IconifyIcon'


interface Iparam {
    className?: string,
    title: string,
    quantity: number | string,
    captions: string,
    icon?: string,
    link: string,
    actionText?: string,
    theme: string,
    iconBg?: string
}

function Statscard({ className, title, quantity, icon, captions = "long text query will pop up here", theme, link, actionText = "View", iconBg }: Iparam) {
    return (
        <nav className={`w-full h-full flex flex-col gap-4 rounded-lg  px-5 pb-5 ${className}`}>
            <h1 className='font-semibold p-2 border-b-[1px] flex items-center justify-center border-white py-3 text-gray-500 leading-3 tracking-normal text-sm'>
                <nav className='basis-[20%]'>
                    <span className=' inline-block h-2 w-2 my-auto bg-white rounded-full '>
                    </span>
                </nav>
                <span className='basis-[80%] '>
                    {title}
                </span>
            </h1>
            <nav className='flex items-center justify-between'>
                <IconifyIcon style={{ color: iconBg }} icon={icon} fontSize="5rem" className='!h-[3rem] self-start bg-transparent  !w-[3rem] !aspect-square bg-inherit/55' />
                <nav className="flex flex-col basis-[80%] gap-5 text-gray-700 ">
                    <nav className='flex flex-col'>
                        <p className=' text-xs text-gray-500'>
                            {captions}
                        </p>
                    </nav>

                    <h2 className='text-lg font-semibold text-gray-600'>
                        {quantity}
                    </h2>
                    <Link style={{ borderWidth: '1px', borderColor: theme, backgroundColor: theme, color: "white" }} href={link} className={classNames(
                        {
                            "font-semibold text-sm whitespace-nowrap truncate lg:text-base p-3 px-6 rounded-full flex items-center gap-3": true,
                        }
                    )}>
                        {actionText}
                        <IconifyIcon className='bg-transparent' icon='material-symbols-light:arrow-outward-rounded' />
                    </Link>
                </nav>
            </nav>
        </nav>
    )
};
export default Statscard