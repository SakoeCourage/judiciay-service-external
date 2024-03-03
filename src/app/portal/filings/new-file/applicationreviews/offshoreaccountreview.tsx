import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import React from 'react'
import QuestionAnswerSection from './questionandaswersection'

function OffshoreAccountReview(props: Partial<applicationIndividualSelfDto>) {
    const { accounts } = props
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Offshore Accounts Review
            </nav>
            <QuestionAnswerSection
                question={'No. of Offshore Accounts Submitted'}
                answer={accounts?.length}
            />
        </div>
    )
}

export default OffshoreAccountReview