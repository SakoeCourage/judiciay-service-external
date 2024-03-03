import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import Selectoption from '@app/app/components/form-components/selectoption'
import { Input } from '@app/app/components/form-components/input'
import Datepicker from '@app/app/components/form-components/datepicker'
import { nationalities } from 'app/app/lib/nationalities';
import ContactInput from '@app/app/components/form-components/contactinput'
const RespresentativeDetails: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData, errors } = props
    return (
        <div className='flex flex-col gap-5 py-5 '>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2  gap-5 w-full'>
                <Input
                    className='grow'
                    label='First Name'
                    required
                    placeholder='Enter First Name'
                    value={data.repFirstName}
                    error={errors.repFirstName}
                    onChange={(e) => { setData('repFirstName', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Surname'
                    required
                    placeholder='Enter Surname'
                    value={data.repSurname}
                    error={errors.repSurname}
                    onChange={(e) => { setData("repSurname", e.target.value) }}
                />
            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 w-full'>
                <Input
                    className='grow'
                    label='Passport Number '
                    required
                    placeholder='Enter Passport Number'
                    value={data.repPassportNumber}
                    error={errors.repPassportNumber}
                    onChange={(e) => { setData('repPassportNumber', e.target.value) }}
                />
                <Selectoption
                    className='grow'
                    required
                    enableSearch
                    searchPlacholder='Search Country'
                    label='Passport Issuing Country'
                    placeholder='Select Passport Issuing Country'
                    options={nationalities ? nationalities.map((n) => { return ({ key: n.en_short_name, value: n.en_short_name }) }) : []}
                    value={data.repPassportIssuingCountry}
                    error={errors.repPassportIssuingCountry}
                    onValueChange={(e) => { setData('repPassportIssuingCountry', e) }}
                />
                <Input
                    className='grow'
                    label='TIN'
                    placeholder='Enter TIN'
                    value={data.repTINNumber}
                    error={errors.repTINNumber}
                    onChange={(e) => { setData('repTINNumber', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Ghana Card Number'
                    placeholder='Enter Ghana Card Number'
                    value={data.repEcowasCardNumber}
                    error={errors.repEcowasCardNumber}
                    onChange={(e) => { setData('repEcowasCardNumber', e.target.value) }}
                />

            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 w-full'>
                <Selectoption
                    label='Capacity'
                    className='!grow'
                    required
                    options={[
                        { key: "Attorney", value: "Attorney" },
                        { key: "Accountant", value: "Accountant" },
                    ]}
                    value={data.repCapacity}
                    error={errors.repCapacity}
                    onValueChange={(e) => { setData('repCapacity', e) }}
                />
                <ContactInput
                    className='grow'
                    label='Phone One '
                    required
                    disableDropdown={false}
                    enableSearch
                    placeholder='Enter Phone One'
                    value={data?.repPhoneOne}
                    error={errors?.repPhoneOne}
                    onChange={(e) => { setData('repPhoneOne', e) }}
                />
                <ContactInput
                    className='grow'
                    label='Phone two '
                    disableDropdown={false}
                    enableSearch
                    placeholder='Enter Phone two'
                    value={data?.repPhoneTwo}
                    error={errors?.repPhoneTwo}
                    onChange={(e) => { setData('repPhoneTwo', e) }}
                />

            </div>
        </div>
    )
}

export default RespresentativeDetails