import React from 'react'
import { StepperComponent } from '../../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import ApplicationDetailReview from '../../applicationreviews/applicationdetailreview'
import PersonalDetailReview from '../../applicationreviews/personaldetailreview'
import AddressReview from '../../applicationreviews/addressreview'
import OffshoreAccountReview from '../../applicationreviews/offshoreaccountreview'
import AttachmentsReview from '../../applicationreviews/attachmentsreview'
import RepresentativeReview from '../../applicationreviews/representativereview'
import Noticecard from '@app/app/components/ui/noticecard'

const ReviewIndividualRepApplication: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data } = props
    return (
        <div className=' flex flex-col gap-3'>
            <Noticecard>
                <ul className=' list-disc'>
                    <li>This is a summary of your VDP application</li>
                    <li>Read through carefully before submission</li>
                    <li>You will not be able to make any changes after submission</li>
                    <li>You will be notified of your application's progress on your dashboard</li>
                    <li>Check your dashboard frequently to respond to any queries raised</li>
                </ul>
            </Noticecard>
            <ApplicationDetailReview {...data} />
            <RepresentativeReview {...data} />
            <PersonalDetailReview {...data} />
            <AddressReview {...data} />
            <OffshoreAccountReview {...data} />
            <AttachmentsReview {...data} />
        </div>
    )
}

export default ReviewIndividualRepApplication