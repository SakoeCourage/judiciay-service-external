"use client"
import React from 'react'
import Image from 'next/image'
import IconifyIcon from '@app/app/components/ui/IconifyIcon'
import { Button } from '@app/app/components/form-components/button'

function LoginNavBar() {
    return (
        <nav className=" h-[var(--header-height)] border-gray-300 bg-[var(--primary-blue)] border-b z-50 flex items-center justify-between  w-full  py-1 ">
            <nav className="container mx-auto flex items-center justify-between">
                <Image className=" object-contain h-full z-50" src="/images/gra-logo.png" alt="gra-icon" width={100} height={50} quality={100} />
                <Button size='md' variant="outline" className='flex !text-white !border-white !rounded-lg items-center gap-2'>
                    <IconifyIcon className='!bg-transparent' icon='material-symbols:help-outline' />
                    <span>
                        Help
                    </span>
                </Button>
            </nav>
        </nav>
    )
}

export default LoginNavBar