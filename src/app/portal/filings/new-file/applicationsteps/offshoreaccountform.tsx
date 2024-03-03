"use client"
import React from 'react'
import { offShoreAccountDto } from '@app/app/types/dtos'
import Selectoption from '@app/app/components/form-components/selectoption'
import { Input } from '@app/app/components/form-components/input'
import { Button } from '@app/app/components/form-components/button'
import { nationalities } from '@app/app/lib/nationalities'
import useForm from '@app/app/hooks/formHook/useForm'
import { z, ZodError } from 'zod'
import { toastnotify } from '@app/providers/Toastserviceprovider'

interface params extends IFormWithDataProps<offShoreAccountDto> {
    addOrUpdateshoreAccountList: (v: offShoreAccountDto) => void
}
function OffshoreAccountForm(props: params) {
    const { onCancel, onNewDataSucess, formData, processing, addOrUpdateshoreAccountList } = props
    const { data, setData, errors, setValidation, post } = useForm<offShoreAccountDto>(formData ? formData : {} as offShoreAccountDto)

    setValidation({
        accountNumber: z.string().min(4, "This Field is Required"),
        currency: z.string().min(1, "This Field is Required"),
        amount: z.number().min(1, "This Field is Required"),
        accountType: z.string().min(1, "This Field is Required"),
        totalGrossAmountInterest: z.number().min(1, "This Field is Required"),
        totalGrossAmountOnProceeds: z.number().min(1, "This Field is Required"),
        financialInstitution: z.string().min(1, "This Field is Required"),
        totalGrossAmount: z.number().min(1, "This Field is Required"),
        country: z.string().min(1, "This Field is Required")
    })

    const handleCreateOrUpdateOffshoreAccount = () => {
        try {
            post("", {
                onSuccess(res) {
                    addOrUpdateshoreAccountList(res?.data as offShoreAccountDto)
                }, onError(err) {
                   
                },
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex flex-col gap-3 max-w-md mx-auto py-10 px-3 lg:px-0'>
            <Selectoption
                value={data?.currency}
                error={errors.currency}
                onValueChange={(e) => setData('currency', e)}
                label='Currency'
                required
                placeholder='Select Currency'
                options={[
                    {
                        key: "US Dollar",
                        value: "USD"
                    },
                    {
                        key: "EURO",
                        value: "EURO"
                    },
                    {
                        key: "UK pound",
                        value: "POUND"
                    },
                ]}
            />
            <Input
                value={data?.amount}
                error={errors.amount}
                label='Amount'
                required
                onChange={(e) => setData('amount', Number(e.target.value))}
                placeholder='00.00'
            />
            <Selectoption
                value={data?.country}
                error={errors.country}
                className=''
                onValueChange={(va) => setData('country', va)}
                required
                enableSearch
                searchPlacholder='Search Country'
                label='Country'
                placeholder='Select Country'
                options={nationalities ? nationalities.map((n) => { return ({ key: n.en_short_name, value: n.en_short_name }) }) : []}
            />
            <Input
                value={data?.accountNumber}
                error={errors.accountNumber}
                label='Account Number'
                onChange={(e) => setData("accountNumber", e.target.value)}
                required
                placeholder='xxxxxxxxxxxxxxxxxxxxxxxxxx'
            />
            <Selectoption
                value={data?.accountType}
                error={errors.accountType}
                className=''
                required
                label='Account Type'
                placeholder='Select Account Type'
                onValueChange={(v) => setData("accountType", v)}
                options={[
                    { key: "Investment", value: "Investment" },
                    { key: "Deposit", value: "Deposit" },
                    { key: "Insurance(Cash Contract or Annuity Contract)", value: "Insurance" },
                    { key: "Custodial Account", value: "Custodial Account" },
                ]}
            />
            <Input
                value={data?.financialInstitution}
                error={errors.financialInstitution}
                onChange={(e) => setData("financialInstitution", e.target.value)}
                label='Financial Institution'
                required
                placeholder='Enter Financial Institution'
            />
            <Input
                value={data?.totalGrossAmount}
                error={errors.totalGrossAmount}
                onChange={(e) => setData("totalGrossAmount", Number(e.target.value))}
                label='Total Gross Amount Generated'
                required
                placeholder='00.00'
            />
            <Input
                value={data?.totalGrossAmountInterest}
                error={errors.totalGrossAmountInterest}
                onChange={(e) => setData("totalGrossAmountInterest", Number(e.target.value))}
                label='Total Gross Amount Insterest'
                required
                placeholder='00.00'
            />
            <Input
                value={data?.totalGrossAmountOnProceeds}
                error={errors.totalGrossAmountOnProceeds}
                onChange={(e) => setData("totalGrossAmountOnProceeds", Number(e.target.value))}
                label='Total Gross Amount on Proceeds'
                required
                placeholder='00.00'
            />
            <nav className='flex items-center justify-end gap-3'>
                <Button type='button' onClick={onCancel} variant='outline' size='sm'>
                    Cancel
                </Button>
                <Button processing={processing} onClick={() => handleCreateOrUpdateOffshoreAccount()} type='submit' variant='primary' size='sm'>
                    Save
                </Button>
            </nav>

        </div>
    )
}

export default OffshoreAccountForm