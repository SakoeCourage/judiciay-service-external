import React from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import { Input } from '@app/app/components/form-components/input'
import Selectoption from '@app/app/components/form-components/selectoption'

const Address: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData,errors } = props
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-5  '>

            <div className=' lg:gap-0 p-6 border rounded-md border-gray-300 '>
                <nav className='font-semibold text-base mb-4 text-gray-500 p-1 border-b border-gray-300'>
                    POSTAL ADDRESS INFORMATION
                </nav>
                <nav className="grid grid-cols-1 gap-5 mt-5">
                    <Input
                        label='Box Number'
                        required
                        placeholder='Enter Box Number'
                        value={data.boxNumber}
                        error={errors.boxNumber}
                        onChange={(e) => { setData('boxNumber', e.target.value) }}
                    />
                    <Selectoption
                        options={[{ key: 'Greater Accra', value: "Greater Accra" }]}
                        label='Postal Region'
                        placeholder='Select Poster Region'
                        value={data.postalRegion}
                        error={errors.postalRegion}
                        onValueChange={(e) => { setData("postalRegion", e) }}
                    />
                    <Input
                        label='Postal Town'
                        required
                        placeholder='Enter Postal Town'
                        value={data.postalTown}
                        error={errors.postalTown}
                        onChange={(e) => { setData('postalTown', e.target.value) }}
                    />

                </nav>
            </div>
            <div className='lg:gap-0 p-6 border rounded-md border-gray-300  '>
                <nav className='font-semibold text-base mb-4 text-gray-500 p-1 border-b border-gray-300'>
                    PHYSICAL ADDRESS INFORMATION
                </nav>
                <nav className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-5">
                    <Input
                        label='Digital Address'
                        required
                        placeholder='Enter Digital Address'
                        value={data.digitalAddres}
                        error={errors.digitalAddres}
                        onChange={(e) => { setData('digitalAddres', e.target.value) }}
                    />
                    <Input
                        label='House Number'
                        required
                        placeholder='Enter House Number'
                        value={data.houseNumber}
                        error={errors.houseNumber}
                        onChange={(e) => { setData('houseNumber', e.target.value) }}
                    />
                    <Input
                        className=' cols-span-1 md:col-span-2'
                        label='Street Name'
                        required
                        placeholder='Enter Street Name'
                        value={data.streetName}
                        error={errors.streetName}
                        onChange={(e) => { setData('streetName', e.target.value) }}
                    />
                </nav>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <Input
                        className=' cols-span-1 md:col-span-2'
                        label='Location'
                        required
                        placeholder='Enter Location(Descriptions)'
                        value={data.location}
                        error={errors.location}
                        onChange={(e) => { setData('location', e.target.value) }}
                    />
                    <Selectoption
                        options={[{ key: 'Greater Accra', value: "Greater Accra" }]}
                        label='Region'
                        placeholder='Select Region'
                        value={data.region}
                        error={errors.region}
                        onValueChange={(e) => { setData('region', e) }}
                    />
                    <Input
                        label='Town'
                        required
                        placeholder='Enter  Town'
                        value={data.town}
                        error={errors.town}
                        onChange={(e) => { setData('town', e.target.value) }}
                    />

                </nav>
            </div>
            <div className="flex flex-col p-5 border border-gray-300 rounded-md col-span-1 md:col-span-2">
                <nav className='font-semibold text-base mb-4 text-gray-500 p-1 border-b border-gray-300'>
                    CONTACT PREFERENCE
                </nav>
                <Selectoption
                    label='Preferred Mode Of Contact'
                    className='w-full'
                    options={[
                        { key: 'Email', value: "Email" },
                        { key: 'SMS', value: "SMS" },
                        { key: 'Phone', value: "Phone" },
                    ]}
                    placeholder='Select Preferred Mode Of Contact'
                    value={data.modeOfContact}
                    error={errors.modeOfContact}
                    onValueChange={(e) => { setData('modeOfContact', e) }}
                />
            </div>
        </div >
    )
}

export default Address