import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import Selectoption from '@app/app/components/form-components/selectoption'
import ContactInput from '@app/app/components/form-components/contactinput'
import { Input } from '@app/app/components/form-components/input'
import { Button } from '@app/app/components/form-components/button'
import Datepicker from '@app/app/components/form-components/datepicker'

const CompanyDetails: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData, errors } = props
    return (
        <div className='flex flex-col gap-5 py-5 '>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-5 w-full'>
                <Input
                    className='grow'
                    label='Entity Registered Name'
                    required
                    placeholder='Enter Entity Registered Name'
                    value={data.entityRegisteredName}
                    error={errors.entityRegisteredName}
                    onChange={(e) => { setData('entityRegisteredName', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Entity Previous Name (If Any)'
                    placeholder='Enter Entity Previous Name'
                    value={data.entityPreviousName}
                    error={errors.entityPreviousName}
                    onChange={(e) => { setData('entityPreviousName', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Entity Registered Number(RGD)'
                    required
                    placeholder='Enter Entity Registered Number'
                    value={data.entityRegisteredNumber}
                    error={errors.entityRegisteredNumber}
                    onChange={(e) => { setData('entityRegisteredNumber', e.target.value) }}
                />
            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                <Input
                    className='grow'
                    label='Entity Related Entity(If any)'
                    placeholder='Enter Entity Related Entity'
                    value={data.entityRelatedEntities}
                    error={errors.entityRelatedEntities}
                    onChange={(e) => { setData('entityRelatedEntities', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Entity Email'
                    placeholder='example@email.com'
                    required
                    value={data.entityEmail}
                    error={errors.entityEmail}
                    onChange={(e) => { setData('entityEmail', e.target.value) }}
                />
                <ContactInput
                    className='grow'
                    label='Telephone Number '
                    required
                    disableDropdown={false}
                    enableSearch
                    placeholder='Enter Telephone Number'
                    value={data.entityTelephoneNumber}
                    error={errors.entityTelephoneNumber}
                    onChange={(e) => { setData('entityTelephoneNumber', e) }}
                />
            </div>

            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                <Input
                    className='grow'
                    label='Web Address'
                    required
                    placeholder='https://wwww.domain.com'
                    value={data.entityWebAddress}
                    error={errors.entityWebAddress}
                    onChange={(e) => { setData('entityWebAddress', e.target.value) }}
                />
                <Datepicker
                    className='grow'
                    label='Date of Incorporation '
                    required
                    placeholder='Select Date of Incorporation'
                    value={data.dateOfIncorporation}
                    error={errors.dateOfIncorporation}
                    onChange={(e) => { setData('dateOfIncorporation', e) }}
                />
            </div>

        </div>
    )
}

export default CompanyDetails