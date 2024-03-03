import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import Selectbubbles from '@app/app/components/form-components/selectbubbles'

const Declaration: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData, errors } = props
    return (
        <div className=' py-10'>
            <nav className='font-medium text-gray-600 leading-[1.5rem]'>
                I <span className='font-bold border-b border-dotted border-[var(--primary-blue)]'> 
                {(data.firstName && data.surname) && `${data.surname} ${data.firstName}`}
                {(data.repFirstName && data.repSurname) && `${data.repSurname} ${data.repFirstName}`}
                </span> hereby delcare that the details submitted by me through this Voluntary Disclosure Programme(VDP)
                Portal are the true, accurate and complete to the best of my knowloedge and belief
            </nav>
        </div>
    )
}

export default Declaration