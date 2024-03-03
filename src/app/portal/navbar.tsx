"use client"
import IconifyIcon from '@app/components/ui/IconifyIcon';
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { Button } from '../components/form-components/button';

interface IRoute {
    title: string;
    icon: string;
    link: string;
}

const RouteList: IRoute[] = [
    {
        title: "Dashboard",
        icon: "ri:user-line",
        link: "/portal/home"
    },
    {
        title: "Disclosures",
        icon: "fluent:task-list-square-rtl-16-regular",
        link: "/portal/disclosures"
    },
    {
        title: "Queries",
        icon: "mynaui:notification",
        link: "/portal/queries"
    },
]

function NavbarItem(props: IRoute) {
    const pathname = usePathname()
    const { title, icon, link } = props
    return <Link href={link} className={
        classNames({
            "flex items-center gap-1  text-xs lg:text-sm  font-medium ": true,
            "nav-route-inactive": !pathname.startsWith(link),
            "nav-route-active": pathname.startsWith(link),
        })
    }>
        <IconifyIcon icon={icon} />
        <span className=' inline-block'>
            {title}
        </span>
    </Link>
}

function Navbar() {
    const usePath = usePathname()
    const router = useRouter();
    return (
        <div className='border-b shadow-sm z-[60] bg-slate-200 sticky top-0'>
            <div className=' container mx-auto h-[var(--header-height)] py-1 flex items-center gap-7 '>
                {RouteList.map((route, i) => <NavbarItem key={i} {...route} />)}
                <Button  onClick={() => router.push('/portal/disclosures/new-application')} variant='default' size='auto' className='ml-auto !hidden lg:!flex items-center  !py-1 !rounded-lg'>
                     Start New VDP Application
                    <IconifyIcon icon='formkit:arrowright' className='bg-transparent' />
                </Button>
            </div>
        </div>
    )
}

export default Navbar