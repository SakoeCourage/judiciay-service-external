"use client"
import React from 'react'
import Selectoption from '@app/app/components/form-components/selectoption'
import { applicationIndividualSelfDto, applicationTypes } from '@app/app/types/dtos'
import { StepperComponent } from '../partials/stepper/steppertypes'
import Selectbubbles from '@app/app/components/form-components/selectbubbles'
import Noticecard from '@app/app/components/ui/noticecard'

const ApplicationDetails: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData, errors } = props

    const getAssessmentYearDateRange = () => {
        let dateRange: number[] = []
        let endDate = new Date().getFullYear()
        let startDate = endDate - 4
        for (let curDate = startDate; curDate < endDate; curDate++) {
            dateRange = [...dateRange, curDate];
        }
        return dateRange
    }
    return (
        <div className='flex flex-col gap-5 py-5   '>
            <Noticecard variant="danger">
                <ul className=' list-disc'>
                    <li>Provide the correct response to all the required fields</li>
                    <li>Fields Marked with asterisk{`(*)`} are mandatory</li>
                    <li>Providing inaccurate or false information may disqualify your application</li>
                </ul>
            </Noticecard>
            <Selectbubbles
                error={errors.applyingForVDP}
                value={data.applyingForVDP}
                onChange={(v) => setData("applyingForVDP", v)}
                size='xs'
                label='Are you Applying for VDP '
                required
                options={[{ key: "Yes", value: "Yes" }, { key: "No", value: "No" }]}
            />
            <Selectoption
                onValueChange={(v) => setData('type', v)}
                value={data.type}
                label='Application Type'
                options={[
                    { key: "Self", value: "Self", disabled: true },
                    { key: "Individual Representative", value: "Individual Representative", disabled: true },
                    { key: "Entity Representative", value: "Entity Representative", disabled: true },
                ]}
            />

            <Selectbubbles
                error={errors.awareOfAudit}
                value={data.awareOfAudit}
                onChange={(v) => setData("awareOfAudit", v)}
                size='xs'
                label='Are you aware of any ongoing investigation? '
                required
                options={[{ key: "Yes", value: "Yes" }, { key: "No", value: "No" }]}
            />
            <Selectoption
                error={errors.assessmentYear}
                value={data?.assessmentYear && String(data?.assessmentYear)}
                placeholder='Select Accessment Year'
                label='Assessment Year'
                onValueChange={(v) => setData('assessmentYear', Number(v))}
                options={getAssessmentYearDateRange().map(date => ({ key: String(date), value: String(date) }))}
            />
            <Selectoption
                error={errors.accountsSubmitting}
                value={data?.accountsSubmitting && String(data?.accountsSubmitting)}
                placeholder='Select An Option'
                label='How Many Account Are You Submitting?'
                onValueChange={(v) => setData('accountsSubmitting', Number(v))}
                options={[...Array(10)].map((n, i) => ({ key: String(i + 1), value: String(i + 1) }))}
            />

        </div>
    )
}

export default ApplicationDetails