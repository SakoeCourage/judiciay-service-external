"use client"
import IconifyIcon from '@app/components/ui/IconifyIcon';
import Link from 'next/link';
import React from 'react'
import { Button } from '@app/app/components/form-components/button';

interface IChoice {
    name: string;
    description: string;
    link: string;
    icon: string,
}


const FillingOptions: IChoice[] = [
    {
        name: "Upload Case",
        description: "File a case by uploading relevant documents",
        link: "/portal/filings/new-file/file-by-doc",
        icon: "tabler:circle-1-filled"
    },
    {
        name: "Manual Entry",
        description: "File case by manual data entry",
        link: "/portal/filings/new-file/file-by-entry",
        icon: "tabler:circle-2-filled"
    }
    // {
    //     name: "Entity Application - Representative",
    //     description: "For applicants who are submitting the request on behalf of a corporate body",
    //     link: "/portal/filings/entity-rep-application",
    //     icon: "tabler:circle-3-filled"
    // }
]


interface IChoice {
    name: string;
    description: string;
    link: string;
}

function ChoiceCard({ name, description, link, icon }: IChoice) {
    return <Link href={link} className='bg-sky-50/50 p-5 border-gray-300 rounded-md transition-all 
    duration-300 h-full overflow-hidden flex ring-[var(--primary-blue)] ring-offset-1 hover:ring-2  aspect-square flex-col gap-4 items-center border shadow-md'>
        <h2 className='w-[5rem] h-[5rem] mx-auto '>
            <IconifyIcon fontSize={"3rem"} className='text-[var(--primary-blue)] !bg-blue-100 w-full h-full aspect-square rounded-full' icon={icon} />
        </h2>
        <nav className='text-lg font-semibold text-gray-600 text-center'>
            {name}
        </nav>
        <nav className=' text-center text-sm text-gray-500'>
            {description}
        </nav>
        <Button size='full' className=' justify-self-end !mt-auto' variant='outline'>
            Continue
        </Button>
    </Link>
}

function page() {
    return (
        <div className=' container mx-auto p-5'>
            <nav className='flex flex-col items-center gap-10 w-auto lg:w-max mx-auto'>
                <nav className=' text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-col items-center lg:items-start lg:flex-row  text-gray-600 add_underline mx-auto'>
                    Welcome to the, <span className=' text-[var(--primary-blue)]'>Judicary System Portal</span>
                </nav>
                <nav className=' text-2xl  text-gray-600  font-semibold'>
                    How would you want to file your case?
                </nav>
            </nav>
            <nav className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-2xl mx-auto'>
                {FillingOptions.map((application, i) => {
                    return (<ChoiceCard
                        key={i}
                        {...application}
                    />)
                })}
            </nav>
        </div>
    )
}

export default page