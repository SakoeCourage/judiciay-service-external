"use client"
import React from 'react'
import Texteditor from 'app/app/components/form-components/texteditor'
import Noticecard from 'app/app/components/ui/noticecard'
import { Textarea } from 'app/app/components/form-components/textarea'
import Plaintifflist from '../file-by-doc/plaintifflist'
import Select2options from 'app/app/components/form-components/select2options'
import Makepayment from '../../makepayment'
import { CASETYPE } from '../file-by-doc/page'
import { Input } from 'app/app/components/form-components/input'

function Sectionhead({ title }: { title: string }) {
    return <nav className=' col-span-1 lg:col-span-2 flex items-center gap-3 py-3 px-4 bg-gray-200/30 sticky top-0 z-40 backdrop-blur-sm'>
        <nav className=' aspect-square flex items-center text-sm justify-center h-3 w-3 rounded-full p-1 bg-gray-500/80 text-gray-50'></nav>
        <nav className='font-semibold text-base text-gray-500'>{title}</nav>
    </nav>
}

function page() {
    return (
        <div className=' container mx-auto'>
            <div className='flex flex-col gap-3'>
                <Sectionhead title='PARTICULARS OF CLAIMS' />
                <nav className="flex flex-col gap-7">
                    <Texteditor
                        name='claims'
                        required
                        placeholder='Write Claims'
                        label='Claims'
                    />
                    <Texteditor
                        name='reliefs'
                        required
                        placeholder='Write Refief(s)'
                        label='Refief(s)'
                    />
                    <Textarea
                        required
                        placeholder=''
                        label='Summary of subject matter of claim' />
                </nav>
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

export default page