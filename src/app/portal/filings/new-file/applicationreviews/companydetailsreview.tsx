import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import React from 'react'
import QuestionAnswerSection from './questionandaswersection'

function CompanyDetailsReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Company Details
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='Entity Registered Name'
                    answer={props?.entityRegisteredName}
                />
                <QuestionAnswerSection
                    question='Entity Previous Name'
                    answer={props?.entityPreviousName}
                />
                <QuestionAnswerSection
                    question='Entity Registered Number(RGD)'
                    answer={props?.entityRegisteredNumber}
                />
                <QuestionAnswerSection
                    question='Entity Related Entity'
                    answer={props?.entityRelatedEntities}
                />
                <QuestionAnswerSection
                    question='Telephone Number'
                    answer={props?.entityTelephoneNumber}
                />
                <QuestionAnswerSection
                    question='Web Address'
                    answer={props?.entityWebAddress}
                />
                <QuestionAnswerSection
                    question='Date of Incorporation'
                    answer={props?.dateOfIncorporation}
                />
            </div>
        </div>
    )
}

export default CompanyDetailsReview