"use client"
import useForm from 'app/app/hooks/formHook/useForm'
import React, { useState } from 'react'
import Fileupload from 'app/app/components/ui/fileupload'
import IconifyIcon from '@app/app/components/ui/IconifyIcon'
import { isNullOrWhitespace } from 'app/app/lib/utils'
import Noticecard from 'app/app/components/ui/noticecard'
import { Input } from 'app/app/components/form-components/input'
import Select2options from 'app/app/components/form-components/select2options'
import { PlaintiffType } from './plaintifflist'
import Plaintifflist from './plaintifflist'
import Makepayment from '../../makepayment'

export const CASETYPE = [
    { value: "Civil", label: "Civil" },
    { value: "Criminal", label: "Criminal" },
  ];

function Page() {
    const { data, setData } = useForm<{ passportPicture: File[], plaintiffList: PlaintiffType[] }>({
        passportPicture: [],
        plaintiffList: []
    })
    const isFile = (value: unknown): value is File => {
        return value instanceof File;
    };

    const checkFileValidationRule = (rule: "Size" | "AcceptType") => {
        if (isNullOrWhitespace(data.passportPicture)) return false
        if (!rule && !isFile(data.passportPicture)) return false

        if (rule == "Size") {
            if (data.passportPicture.size < 1080033) {
                return true
            }
            return false
        }

        if (rule == "AcceptType") {

            if (['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(data.passportPicture.type)) {
                return true
            }
            return false
        }
    }


    return (
        <div className='container mx-auto '>
            <nav className='flex items-center gap-5 my-5 pb-3 border-b border-gray-300 '>
                <IconifyIcon icon='ant-design:plus-outlined' />
                <h3 className=' text-lg font-semibold uppercase text-gray-600'>
                    New Filing By Document Upload
                </h3>
            </nav>
            <div>
                <div className='border p-5 '>
                    <Noticecard >
                        <nav className="flex flex-col gap-3">
                            <nav className=' block text-gray-500 border-b mb-1 font-sm font-semibold '>
                                UPLOAD WRIT OF SUMMON
                            </nav>
                            <ul className='my-auto   flex flex-col justify-center gap-1'>
                                <li className={`text-xs flex items-center gap-2 }`}>
                                    <IconifyIcon icon={'charm:circle-tick'} fontSize="1rem" className='bg-transparent' />
                                    <span>  Recommended Fies Size - less than 20.03mb</span>
                                </li>
                                <li className={`text-xs flex items-center gap-2  'text-green-500' }`}>
                                    <IconifyIcon icon={'charm:circle-tick'} fontSize="1rem" className='bg-transparent' />
                                    <span>   AcceptType - pdf/jpg/jpeg/png </span>
                                </li>
                            </ul>
                        </nav>
                    </Noticecard>
                    <div className=' gap-2 !bg-white  pt-2 pb-2 px-5 lg:py-5  '>
                        <Fileupload placeholder="Click To Browse Files" files={typeof data?.passportPicture != 'undefined' && [data.passportPicture]} getFiles={(files) => setData('passportPicture', files)}
                            acceptType={['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']}
                            maxNumber={12}
                            maxFileSize={20080000}
                        />
                    </div>
                </div>
            </div>

            <div className='p-5 border border-gray-300 my-4'>
                <Noticecard >
                    <nav className="flex flex-col gap-3 w-full">
                        <nav className=' block text-gray-500 mb-1 font-sm font-semibold '>
                            CASE DESCRIPTION
                        </nav>
                    </nav>
                </Noticecard>
                <nav className="grid grid-cols-1 md:grid-cols-2 py-3 gap-5">
                    <Input
                        className='md:col-span-2'
                        label='Case Title' required
                        placeholder='Enter Case Title'
                    />
                    <Select2options
                        data={CASETYPE}
                        label='Case Type'
                        placeholder='Select The Type Of Case'
                        required
                    />
                    <Select2options
                        data={[]}
                        label='Nature Of Case'
                        placeholder='Select The Nature Of Case'
                        required
                    />
                </nav>

                <Noticecard className='my-5'>
                    <nav className="flex flex-col gap-3 w-full ">
                        <nav className=' block text-gray-500 border-b mb-1 font-sm font-semibold '>
                            PLAINTIFF
                        </nav>
                        <ul className='text-sm list-disc list-inside'>
                            <li>Click on the plus icon to add an individual or Corporate <b className='font-semibold underline'>plaintiff</b></li>
                            <li>Click on the plus corresponding remove button to remove a <b className='font-semibold underline'>plaintiff</b> from the list</li>
                        </ul>
                    </nav>
                </Noticecard>
                <div className='md:col-span-2 border-b mb-2'>
                    <Plaintifflist theme='Plaintiff' />
                </div>
                <Noticecard className='my-5'>
                    <nav className="flex flex-col gap-3 w-full ">
                        <nav className=' block text-gray-500 border-b mb-1 font-sm font-semibold '>
                            DEFENDANTS
                        </nav>
                        <ul className='text-sm list-disc list-inside'>
                            <li>Click on the plus icon to add an individual or Corporate <b className='font-semibold underline'>Defendant</b></li>
                            <li>Click on the plus corresponding remove button to remove a <b className='font-semibold underline'>Defendant</b> from the list</li>

                        </ul>
                    </nav>
                </Noticecard>
                <div className='md:col-span-2'>
                    <Plaintifflist theme='Defendant' />
                </div>
            </div>

            <div>
                <Noticecard className='my-5'>
                    <nav className="flex flex-col gap-3 w-full ">
                        <nav className=' block text-gray-500 border-b mb-1 font-sm font-semibold '>
                            ADD A LAWYER
                        </nav>
                        <ul className='text-sm list-disc list-inside'>
                            <li>Provide a lawyer by the <b className=' font-semibold text-gray-600 underline'>Ghana Bar Number</b> </li>
                        </ul>
                    </nav>
                </Noticecard>
                <nav className="grid grid-cols-1 md:grid-cols-2 py-3 gap-5">
                    <Input
                        className='md:col-span-2'
                        label='GHBAR Number'
                        required
                        placeholder='Enter Lawyers Ghana Bar Number'
                    />
                    <Input
                        className='md:col-span-2'
                        label='Lawyers Full Name'
                        disabled
                        required
                        placeholder='Auto Populated'
                    />
            
                </nav>
            </div>

            <div className='py-5'>
                <Noticecard className='my-5'>
                    <nav className="flex flex-col gap-3 w-full ">
                        <nav className=' block text-gray-500 border-b mb-1 font-sm font-semibold '>
                            Make Payment
                        </nav>
                        <ul className='text-sm list-disc list-inside'>
                            <li>Select the appropriate payment method</li>
                            <li>Provide the appropraite payment data to process payment</li>

                        </ul>
                    </nav>
                </Noticecard>
                <Makepayment />
            </div>


        </div>
    )
}

export default Page