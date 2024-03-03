import React, { useEffect } from 'react'
import Image from 'next/image';
import Selectoption from 'app/app/components/form-components/selectoption';
import { Input } from 'app/app/components/form-components/input';
import useForm from 'app/app/hooks/formHook/useForm';
import { Button } from 'app/app/components/form-components/button';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod'
import { formatcurrency } from 'app/app/lib/utils';
import { toastnotify } from '@app/providers/Toastserviceprovider';
import { AxiosResponse } from 'axios';
import Api from 'app/app/fetch/axiosInstance';
import ContactInput from 'app/app/components/form-components/contactinput';
import { useRouter } from 'next/navigation';

export type PaymentModes = "Cash" | "Card" | "MOMO"


export interface IpaymentInterface {
    id: number,
    paymentMode: PaymentModes | string,
    amountToDebit: number,
    momoNetwork: string,
    momoNumber: string,
    createdBy: string,
    bank: number,
    accountNumber?: string,
    chequeNumber?: string,
    CAGDStaffID?: string,
    updateBy: string | null,
    createdAt: string | null,
    updatedAt: string | null
}

export const SlideUpAndDownAnimation = {
    initial: { opacity: 0, translateY: "10px" },
    animate: {
        opacity: 1,
        translateY: "0",
        transition: {
            type: 'spring',
            mass: 0.1,
            damping: 8
        }
    },
    exit: { opacity: 0, translateY: "10px", transition: { duration: 0.5 } }
};

interface IAvailablePaymentMethod {
    name: string,
    accessor: string,
    value: string,
    hints: string,
    icon: string
}

const AvailablePaymentMethods: Array<IAvailablePaymentMethod> = [
    {
        name: "Cash",
        accessor: "Cash",
        value: "Cash",
        hints: "Pay with cash",
        icon: "/images/paymentmethodthumbnails/cash.png"
    },
    {
        name: "MTN MoMo",
        accessor: "MOMO",
        value: "MTN",
        hints: "Use an MTN MoMO number to process payment",
        icon: "/images/paymentmethodthumbnails/mtn.svg"
    },
    {
        name: "Vodafon Cash",
        accessor: "MOMO",
        value: "VODAFONE",
        hints: "Use a Vodafone Cash number to process payment",
        icon: "/images/paymentmethodthumbnails/vodafone.png"
    },

    {
        name: "Credit Card",
        accessor: "Card",
        value: "Card",
        hints: "Use a bank card to process payment",
        icon: "/images/paymentmethodthumbnails/card.jpg"
    }

]

function PaymentmethodCard(param: IAvailablePaymentMethod & {
    onChange: (v: IAvailablePaymentMethod) => void,
    isActive: boolean
}): React.ReactNode {
    const { name, accessor, value, hints, icon, onChange, isActive } = param

    return <nav onClick={() => onChange(param)} className={classNames({
        "flex items-start  cursor-pointer p-2 gap-1 border transition-all duration-500 rounded-md": true,
        "border-gray-400/60 hover:bg-blue-50  text-gray-700": isActive == false,
        "border-blue-400 bg-blue-100 text-blue-700 ring-2 ring-offset-1 ring-blue-500": isActive == true
    })}>
        <nav className=' basis-5 py-1 flex  justify-center'>
            <input checked={isActive} type="radio" />
        </nav>
        <nav className='flex flex-col gap-0 grow '>
            <h1 className='text-sm font-medium opacity-90'>{name}</h1>
            <p className=' text-[0.7rem]'>
                {hints}
            </p>
        </nav>
        <nav className=' basis-[2.8rem] flex items-center justify-center self-center overflow-hidden'>
            <Image className=' bg-blend-screen h-10 w-10 aspect-square rounded-full object-contain my-auto' src={icon} alt={name} width={70} height={70} quality={100} />
        </nav>
    </nav>
}



function Makepayment() {
    const router = useRouter()

    const { data, setData, errors, setValidation, post, patch, processing } = useForm<Partial<IpaymentInterface>>({

    })

    const simulatePayment = () => {
        router.push('/portal/casemanagement/filedcases')
        toastnotify("New Case File Made Successfully", 'Success');
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-3.5rem)] '>
            <div className='w-full h-full mx-auto max-w-md'>
                <div className=' py-2 lg:py-6 px-5  w-full lg:sticky lg:top-0'>
                    <nav className='mb-2 text-gray-600 font-medium'>
                        Select Payment Method
                    </nav>
                    <div className='grid grid-cols-1 gap-2'>
                        {AvailablePaymentMethods.map((method, i) => <PaymentmethodCard
                            key={i}
                            isActive={(method.accessor == "MOMO") ? data.momoNetwork == method.value : data.paymentMode == method.accessor}
                            onChange={(v) => {
                                if (v.accessor == "MOMO") {
                                    setData(
                                        {
                                            ...data,
                                            momoNetwork: v.value,
                                            paymentMode: "MOMO"
                                        }
                                    )
                                } else {
                                    setData(
                                        {
                                            ...data,
                                            paymentMode: v?.accessor,
                                            momoNetwork: ""
                                        })
                                }
                            }}
                            {...method} />)}
                    </div>
                </div>
            </div>
            <div className='bg-gray-100/90 w-full flex flex-col items-start  h-full   px-5'>
                <div className='  pt-2 px-5  mx-auto max-w-md w-full'>
                    <nav className=' py-4 pb-4 flex flex-col gap-1 border-b border-gray-300 w-full'>
                        <nav className=' font-semibold text-gray-600 '>Case Title</nav>
                        <nav className=' text-xs'>You are about process payment for the given case above</nav>
                    </nav>
                    <nav className='my-2 grid grid-cols-1 gap-5 w-full pt-4'>
                        <nav className="flex items-center justify-between">
                            <nav className=' text-sm text-gray-600'>
                                Number of Plaintiff{`(s)`}:
                            </nav>
                            <nav className='font-semibold text-gray-600'>
                                0
                            </nav>
                        </nav>
                        <nav className="flex items-center justify-between">
                            <nav className=' text-sm text-gray-600'>
                                Number of Defendants{`(s)`}:
                            </nav>
                            <nav className='font-semibold text-gray-600'>
                                0
                            </nav>
                        </nav>
                        <nav className="flex items-center justify-between">
                            <nav className=' text-sm text-gray-600'>
                                Amount To Pay:
                            </nav>
                            <nav className='font-semibold text-gray-600'>
                                {data.amountToDebit ? formatcurrency(data.amountToDebit) : "..."}
                            </nav>
                        </nav>
                    </nav>
                    <nav className=' py-4 border-b border-gray-300 text-xs'>

                    </nav>

                    {
                        data.paymentMode != "Cash" &&
                        <nav className='mt-4 my-2 text-gray-600 font-medium'>
                            Provide Payment Info
                        </nav>
                    }


                    <nav className='flex flex-col gap-3 w-full'>

                        {
                            data.paymentMode == "MOMO" &&
                            <motion.nav
                                variants={SlideUpAndDownAnimation}
                                initial='initial'
                                animate='animate'
                                exit='exit' className=' flex flex-col gap-3 w-full'>
                                <ContactInput
                                    className='w-full'
                                    required
                                    value={data.momoNumber}
                                    onChange={(v) => setData('momoNumber', v)}
                                    error={errors?.momoNumber}
                                    label='MoMo Number'
                                    placeholder='(00) (0000) (0000)'
                                />
                            </motion.nav>
                        }


                        {data.paymentMode == "Card" && <motion.nav
                            variants={SlideUpAndDownAnimation}
                            initial='initial'
                            animate='animate'
                            exit='exit' className=' grid grid-cols-1 md:grid-cols-2 gap-5 '>

                            <Input className=' md:col-span-2' required
                                label='Card Holder Name' placeholder="Enter Card Holder Name" />
                            <Input className=' md:col-span-2' required
                                label='Card Number' placeholder='xxxxxxxxxxxxxxxxxxx' />
                            <Input className=' ' required
                                label='Month/Year' placeholder="MM/YY" />
                            <Input className=' ' required
                                label='CVV' placeholder="Enter CVV" />

                        </motion.nav>
                        }



                    </nav>
                    <nav className=' flex flex-col gap-3 pt-3 w-full'>


                    </nav>
                    <nav className='flex items-center justify-end flex-col gap-1 w-full mt-4 pb-2'>
                        <Button processing={processing} onClick={() => simulatePayment()} variant='primary' size='full'>
                            Save & Make Payment
                        </Button>
                        <Button onClick={() => router.push('/portal/casemanagement/filedcases')} className=' !bg-white' variant='outline' size='full'>
                            Cancel
                        </Button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Makepayment