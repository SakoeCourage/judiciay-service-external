import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import QuestionAnswerSection from './questionandaswersection'

function ApplicationDetailReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Application Details
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='Applying for VDP?'
                    answer={props?.applyingForVDP}
                />
                <QuestionAnswerSection
                    question='Application Type'
                    answer={props?.type}
                />
                <QuestionAnswerSection
                    question='Awareness of ongoing investigation?'
                    answer={props?.awareOfAudit}
                />
                <QuestionAnswerSection
                    question='Assessment Year'
                    answer={props?.assessmentYear}
                />
                <QuestionAnswerSection
                    question='Accounts Submitting'
                    answer={props?.accountsSubmitting}
                />
            </div>
        </div>
    )
}

export default ApplicationDetailReview