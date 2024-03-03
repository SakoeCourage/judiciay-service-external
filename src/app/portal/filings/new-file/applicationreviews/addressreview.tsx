import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import QuestionAnswerSection from './questionandaswersection'

function AddressReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Addresss Details
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='Box Number'
                    answer={props?.boxNumber}
                />
                <QuestionAnswerSection
                    question='Postal Region'
                    answer={props?.postalRegion}
                />
                <QuestionAnswerSection
                    question='Postal Town'
                    answer={props?.postalTown}
                />
                <QuestionAnswerSection
                    question='Digital Address'
                    answer={props?.digitalAddres}
                />
                <QuestionAnswerSection
                    question='House Number'
                    answer={props?.houseNumber}
                />
                <QuestionAnswerSection
                    question='Street Name'
                    answer={props?.streetName}
                />
                <QuestionAnswerSection
                    question='Location'
                    answer={props?.location}
                />
                <QuestionAnswerSection
                    question='Region'
                    answer={props?.region}
                />
                <QuestionAnswerSection
                    question='Town'
                    answer={props?.town}
                />
                <QuestionAnswerSection
                    question='Preferred Mode Of Contact'
                    answer={props?.modeOfContact}
                />
            </div>
        </div>
    )
}

export default AddressReview