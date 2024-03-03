import React from 'react'

import IconifyIcon from '@app/app/components/ui/IconifyIcon'
import classNames from 'classnames'

function Steplabel({ index, name, active, completed, pending, onStepChange }: {
    index: number,
    name: string | React.ReactNode,
    active: boolean,
    completed: boolean,
    pending: boolean,
    onStepChange: (v: number) => void
}) {

    return (
        <button onClick={() => onStepChange(index)}
            className={classNames({
                "flex  items-center gap-1 px-2 pr-4 font-medium grow-1 py-1 border-[1px] border-gray-500  rounded-full snap-center": true,
                "bg-sky-100 border-sky-600 text-sky-800 font-semibold active-step-label": active,
                "text-sky-800 bg-sky-100/75": completed,
                "text-gray-500": pending
            })}>
            <nav className={`flex text-xs mx-auto shadow-sm items-center justify-center p-1 md:p-1 aspect-square rounded-full overflow-hidden font-semibold md:text-lg  text-gray-500 ${active && " text-sky-800"} ${completed && " text-sky-800"} ${pending && ""}  `}>
                {pending ? 
                <IconifyIcon className='w-1rem h-1rem bg-transparent' fontSize="1rem" icon='bi:question-circle' />
                : active ?<IconifyIcon className='w-1rem h-1rem bg-transparent' fontSize="1rem" icon='akar-icons:question-fill' />  
                : <IconifyIcon className='w-1rem h-1rem bg-transparent' fontSize="1rem" icon='material-symbols:check-circle' />
            }
            </nav>
            <nav className=' flex items-center gap-1 text-xs whitespace-nowrap truncate '><span className=' text-center md:text-justify' >{index + 1}.</span> <span className=''>{name}</span></nav>
        </button>
    )
}

export default Steplabel