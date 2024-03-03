import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import QuestionAnswerSection from './questionandaswersection'

function PersonalDetailReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Personal Details
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='First Name'
                    answer={props?.firstName}
                />
                <QuestionAnswerSection
                    question='Middle Name'
                    answer={props?.middleName}
                />
                <QuestionAnswerSection
                    question='Surname'
                    answer={props?.surname}
                />
                <QuestionAnswerSection
                    question='Initials'
                    answer={props?.initials}
                />
                <QuestionAnswerSection
                    question='Previous Names'
                    answer={props?.previousName}
                />
                <QuestionAnswerSection
                    question='Date of Birth'
                    answer={props?.dateOfBirth}
                />
                <QuestionAnswerSection
                    question='Marital Status'
                    answer={props?.maritalStatus}
                />
                <QuestionAnswerSection
                    question='Nationality'
                    answer={props?.nationality}
                />
                <QuestionAnswerSection
                    question='Ghana Card/TIN'
                    answer={props?.ecowasCard}
                />
                <QuestionAnswerSection
                    question='Passport Number'
                    answer={props?.passportNumber}
                />
                <QuestionAnswerSection
                    question='Passport Issuing Country'
                    answer={props?.passportIssuingCountry}
                />
                <QuestionAnswerSection
                    question='Passport Expiry Date'
                    answer={props?.passportExpiryDate}
                />
                <QuestionAnswerSection
                    question='Mobile Number'
                    answer={props?.phoneOne}
                />
            </div>
        </div>
    )
}

export default PersonalDetailReview