import React from 'react'
import IconifyIcon from '@app/components/ui/IconifyIcon'
import { diffForHumans, dateReformat } from '@app/app/lib/utils';
import Tooltip from '@app/app/components/ui/tooltip';
import Link from 'next/link';
export interface IQueryProp {
    title: string;
    content: string;
    createdAt: string;
}

function QueryItem({ title, content, createdAt }: IQueryProp) {
    return (
        <div className='flex items-center w-full query-list-item p-4 gap-4 overflow-visible'>
            <nav className=' basis-[3rem] w-[3rem] aspect-square rounded-full'>
                <IconifyIcon
                    icon='basil:notification-outline'
                    className='bg-transparent w-full h-full text-gray-500'
                />
            </nav>
            <nav className=' grow flex flex-col'>
                <h3 className=' text-xs text-gray-400'>
                    {title}
                </h3>
                <h2>
                    {content}
                </h2>
                <h3 className='mr-auto text-xs text-gray-400'>
                    {diffForHumans(dateReformat(createdAt))}
                </h3>
            </nav>
            <Link href="/" className='action-button overflow-visible h-10 w-10 flex items-center justify-center p-2 rounded-full bg-[var(--primary-blue)] text-white'>
                <Tooltip toolTipText='View Query'>
                    <IconifyIcon className='bg-transparent' icon='ph:arrow-right' />
                </Tooltip>
            </Link>
        </div>
    )
}

export default QueryItem