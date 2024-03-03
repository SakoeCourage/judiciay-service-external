import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import React from 'react'
import QuestionAnswerSection from './questionandaswersection'

function RepresentativeReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Representative Details
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='First Name'
                    answer={props?.repFirstName}
                />
                <QuestionAnswerSection
                    question='Surname'
                    answer={props?.repSurname}
                />
                <QuestionAnswerSection
                    question='Passport Number'
                    answer={props?.repPassportNumber}
                />
                <QuestionAnswerSection
                    question='Passport Issuing Country'
                    answer={props?.repPassportIssuingCountry}
                />
                <QuestionAnswerSection
                    question='TIN'
                    answer={props?.repTINNumber}
                />
                <QuestionAnswerSection
                    question='Ghana Card Number'
                    answer={props?.repEcowasCardNumber}
                />
                <QuestionAnswerSection
                    question='Capacity'
                    answer={props?.repCapacity}
                />
                <QuestionAnswerSection
                    question='Mobile Number'
                    answer={props?.repPhoneOne}
                />
            </div>
        </div>
    )
}

export default RepresentativeReview