import React from 'react'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import QuestionAnswerSection from './questionandaswersection'

function AttachmentsReview(props: Partial<applicationIndividualSelfDto>) {
    return (
        <div className='p-3 bg-white border rounded-md '>
            <nav className=' border-b text-gray-600 text-base pb-2 mb-2'>
                Attachments Review
            </nav>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-7 '>
                <QuestionAnswerSection
                    question='Uploaded Attachment(s)'
                    answer={props?.attachments?.length}
                />
            </div>
        </div>
    )
}

export default AttachmentsReview