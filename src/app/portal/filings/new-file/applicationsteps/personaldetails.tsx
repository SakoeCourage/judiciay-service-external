import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import Selectoption from '@app/app/components/form-components/selectoption'
import { Input } from '@app/app/components/form-components/input'
import Datepicker from '@app/app/components/form-components/datepicker'
import { nationalities } from 'app/app/lib/nationalities';
import ContactInput from '@app/app/components/form-components/contactinput'

const PersonalDetails: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData, errors } = props
    return (
        <div className='flex flex-col gap-5 py-5 '>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-5 w-full'>
                <Input
                    className='grow'
                    label='First Name'
                    required
                    placeholder='Enter First Name'
                    value={data.firstName}
                    error={errors.firstName}
                    onChange={(e) => { setData('firstName', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Middle Name'
                    placeholder='Enter Middle Name'
                    value={data.middleName}
                    error={errors.middleName}
                    onChange={(e) => { setData('middleName', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Surname'
                    required
                    placeholder='Enter Surname'
                    value={data.surname}
                    error={errors.surname}
                    onChange={(e) => { setData('surname', e.target.value) }}
                />
            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 w-full'>
                <Input
                    className='grow'
                    label='Initials '
                    required
                    placeholder='Enter Initials'
                    value={data.initials}
                    error={errors.initials}
                    onChange={(e) => { setData('initials', e.target.value) }}
                />
                <Input
                    className='grow'
                    label='Previous Fullname (if any)'
                    placeholder='Enter Previous Full Name'
                    value={data.previousName}
                    error={errors.previousName}
                    onChange={(e) => { setData('previousName', e.target.value) }}
                />

            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 w-full'>
                <Datepicker
                    className='grow'
                    label='Date of Birth '
                    required
                    placeholder='Enter Date of Birth'
                    value={data.dateOfBirth}
                    error={errors.dateOfBirth}
                    onChange={(e) => { setData('dateOfBirth', e) }}
                />
                <Selectoption
                    label='Marital Status'
                    className='!grow'
                    required
                    options={[
                        { key: "Married", value: "Married" },
                        { key: "Single", value: "Single" },
                        { key: "Divorced", value: "Divorced" },
                        { key: "Widowed", value: "Widowed" },
                    ]}
                    value={data.maritalStatus}
                    error={errors.maritalStatus}
                    onValueChange={(e) => { setData('maritalStatus', e) }}
                />

            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 w-full'>
                <Selectoption
                    className='grow'
                    required
                    enableSearch
                    searchPlacholder='Search Country'
                    label='Nationality'
                    placeholder='Select Nationality'
                    options={nationalities ? nationalities.map((n) => { return ({ key: n.nationality, value: n.nationality }) }) : []}
                    value={data.nationality}
                    error={errors.nationality}
                    onValueChange={(e) => { setData('nationality', e) }}
                />
                <Input
                    className='grow'
                    label='Ghana Card/TIN '
                    required
                    placeholder='Enter Ghana Card/TIN'
                    value={data.ecowasCard}
                    error={errors.ecowasCard}
                    onChange={(e) => { setData('ecowasCard', e.target.value) }}
                />
            </div>
            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 w-full'>

                <Input
                    className='grow'
                    label='Passport Number '
                    required
                    placeholder='Enter Passport Number'
                    value={data.passportNumber}
                    error={errors.passportNumber}
                    onChange={(e) => { setData('passportNumber', e.target.value) }}
                />
                <Selectoption
                    className='grow'
                    required
                    enableSearch
                    searchPlacholder='Search Country'
                    label='Passport Issuing Country'
                    placeholder='Select Passport Issuing Country'
                    onValueChange={(v) => setData("passportIssuingCountry", v)}
                    error={errors.passportIssuingCountry}
                    value={data.passportIssuingCountry}
                    options={nationalities ? nationalities.map((n) => { return ({ key: n.en_short_name, value: n.en_short_name }) }) : []}
                />
                <Datepicker
                    className='grow'
                    label='Passport Expiry Date '
                    required
                    placeholder='Enter Passport Expiry Date'
                    value={data.passportExpiryDate}
                    error={errors.passportExpiryDate}
                    onChange={(e) => { setData('passportExpiryDate', e) }}
                />
            </div>

            <div className=' gap-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 w-full z-50'>
                <ContactInput
                    className='grow'
                    label='Phone one '
                    required
                    disableDropdown={false}
                    enableSearch
                    placeholder='Enter Phone one'
                    value={data.phoneOne}
                    error={errors.phoneOne}
                    onChange={(e) => { setData('phoneOne', e) }}
                />
                <ContactInput
                    className='grow'
                    label='Phone two '
                    disableDropdown={false}
                    enableSearch
                    placeholder='Enter Phone two'
                    value={data.phoneTwo}
                    error={errors.phoneTwo}
                    onChange={(e) => { setData('phoneTwo', e) }}
                />

            </div>
        </div>
    )
}

export default PersonalDetails