"use client"
import React, { useEffect, useState } from 'react'
import Noticecard from '@app/app/components/ui/noticecard'
import SimpleStepper from '../partials/stepper/simplestepper'
import useForm from '@app/app/hooks/formHook/useForm'
import { applicationIndividualSelfDto, documentDto } from '@app/app/types/dtos'
import { Step } from '../partials/stepper/steppertypes'
import PersonalDetails from '../applicationsteps/personaldetails'
import ApplicationDetails from '../applicationsteps/applicationdetails'
import Address from '../applicationsteps/address'
import OffshoreAccount from '../applicationsteps/offshoreaccount'
import Attachment from '../applicationsteps/attachment'
import Declaration from '../applicationsteps/declaration'
import CompanyDetails from '../applicationsteps/companydetails'
import RespresentativeDetails from '../applicationsteps/respresentativedetails'
import ReviewEntityRep from './partials/reviewentityrep'
import { DialogService } from '@app/providers/Dailogueserviceprovider'
import { z } from 'zod'
import Image from 'next/image'
import { isIActionResult } from '@app/app/hooks/formHook/useFormtypes'
import { toastnotify } from '@app/providers/Toastserviceprovider'
import { useRouter } from 'next/navigation'
import { getQueryParamValue } from '@app/app/lib/utils'
import { AxiosResponse } from 'axios'
import Api from '@app/app/fetch/axiosInstance'
import FormCompletedStatus from '@app/app/components/ui/formcompletedstatus'
import Link from 'next/link'


function Page() {
    const router = useRouter()
    const { data, post, put, setData, processing, errors, setValidation, setErrors } = useForm<Partial<applicationIndividualSelfDto>>({
        type: "Entity Representative",
        accounts: [],
        declaration: true
    })
    const [fetchingPrevData, setFetchingPrevData] = useState(false)

    const { setDialogData } = DialogService()

    setValidation({
        applyingForVDP: z.string().min(1, "This filed is required"),
        type: z.string().min(1, "This filed is required"),
        awareOfAudit: z.string().min(1, "This filed is required"),
        assessmentYear: z.number().min(1, "This filed is required"),
        accountsSubmitting: z.number().min(1, "This filed is required"),
        repFirstName: z.string().min(1, "This filed is required"),
        repSurname: z.string().min(1, "This filed is required"),
        repPassportNumber: z.string().min(1, "This filed is required"),
        repPassportIssuingCountry: z.string().min(1, "This filed is required"),
        repPhoneOne: z.string().min(1, "This filed is required"),
        repTINNumber: z.string().min(1, "This filed is required"),
        repCapacity: z.string().min(1, "This filed is required"),
        repEcowasCardNumber: z.string().min(1, "This filed is required"),
        dateOfIncorporation: z.string().min(1, "This filed is required"),
        entityEmail: z.string().email(),
        entityPreviousName: z.string().nullable().optional(),
        entityRegisteredName: z.string().min(1, "This filed is required"),
        entityRelatedEntities: z.string().optional().nullable(),
        entityTelephoneNumber: z.string().min(1, "This filed is required"),
        entityWebAddress: z.string().min(1, "This Field Is Required").url("Invalid Web Address"),
        entityRegisteredNumber: z.string().min(1, "This filed is required"),
        boxNumber: z.string().min(1, "This filed is required"),
        postalTown: z.string().min(1, "This filed is required"),
        postalRegion: z.string().min(1, "This filed is required"),
        digitalAddres: z.string().min(1, "This filed is required"),
        houseNumber: z.string().min(1, "This filed is required"),
        streetName: z.string().min(1, "This filed is required"),
        location: z.string().min(1, "This filed is required"),
        region: z.string().min(1, "This filed is required"),
        town: z.string().min(1, "This filed is required"),
        modeOfContact: z.string().min(1, "This filed is required"),
        accounts: (Array.isArray(data.accounts) && Object.keys(data.accounts).length > 0) ? z.any().nullable().optional() : z.string().min(1, "This field is required"),
        attachments: (Array.isArray(data.attachments) && Object.keys(data.attachments).length > 0) ? z.any().nullable().optional() : z.string().min(1, "This field is required")
    })

    const IndividualSelfApplicationSteps: Step<Partial<applicationIndividualSelfDto>>[] = [
        {
            component: ApplicationDetails,
            label: "Application Details",
            validationFields: ['applyingForVDP', 'type', 'awareOfAudit', 'assessmentYear', 'accountsSubmitting'],
            validationLink: "/client/documents/application-info"
        },
        {
            component: RespresentativeDetails,
            label: "Representative Details",
            validationFields: [
                'repCapacity', 'repEcowasCardNumber', 'repPassportIssuingCountry',
                'repPassportNumber', 'repPhoneOne', 'repTINNumber', 'repFirstName',
                'repSurname'
            ],
            validationLink: "/client/documents/personal-details"

        },
        {
            component: CompanyDetails,
            label: "Company Details",
            validationFields: [
                "dateOfIncorporation", 'entityEmail', 'entityPreviousName', 'entityRegisteredName',
                'entityRegisteredNumber', 'entityRelatedEntities', 'entityTelephoneNumber', 'entityWebAddress'
            ],
            validationLink: "/client/documents/entity"

        },
        {
            component: Address,
            label: "Address",
            validationFields: ['boxNumber', 'postalRegion', 'postalTown', 'digitalAddres', 'houseNumber',
                'streetName', 'location', 'region', 'postalTown', 'modeOfContact'
            ],
            validationLink: "/client/documents/address"

        },
        {
            component: OffshoreAccount,
            label: "Offshore Account",
            validationFields: ['accounts'],
            validationLink: "/client/documents/accounts"
        },
        {
            component: Attachment,
            label: "Attachment",
            validationFields: ['attachments'],
            validationLink: "/client/documents/attachments"
        },
        {
            component: ReviewEntityRep,
            label: "Reivew",
            validationFields: [],
            validationLink: ""
        }
    ]

    const handleFormSubmission = () => {
        return new Promise((resolve, reject) => {
            post('', {
                onError: (err) => {
                    reject(err)
                },
                onSuccess: (res) => {
                    resolve(res)
                },
                config: {
                    asFormData: false,
                    showToastError: false
                }
            }
            )
        })
    }

    const handleOnStepComplete = () => {

        setDialogData({
            open: true,
            title: "Declaration",
            cancelText: "I Decline",
            okText: "I Agree",
            customIcon: <Image className=' w-[7rem] aspect-[8/3]' src="/images/gra-logo.png" height={4000} width={400} quality={100} alt='gra-logo' />,
            promptText: <Declaration setData={setData} data={data} errors={errors} />
        }).onDialogConfirm(() => {
            post('/client/documents/declaration', {
                onError: (err) => {
                    console.log(err)
                },
                onSuccess: (res) => {
                    if (isIActionResult(res.data)) {
                        toastnotify(res.data.message, 'Success')
                        router.push('/portal/disclosures')
                    }
                },
                config: {
                    asFormData: false,
                    showToastError: false,
                }
            })
        }).onDialogDecline(() => {
            setData('declaration', false)
        })
    }

    useEffect(() => {
        const applicationId = getQueryParamValue(window.location.href, 'application_id')
        const isDocumentDto = (file: documentDto): file is documentDto => {
            return 'id' in file
        }
        if (applicationId) {
            setFetchingPrevData(true)
            Api.get('/client/documents/' + applicationId)
                .then((res: AxiosResponse<applicationIndividualSelfDto>) => {
                    console.log(res.data)
                    if (res.data.completed) {
                        window.location.href = "/portal/disclosures"
                    }
                    let resAttacthments: string[] = []
                    if (!!res?.data?.attachments?.length) {

                        for (const attachment of res.data.attachments) {
                            if (isDocumentDto(attachment as documentDto)) {
                                resAttacthments = [...resAttacthments, attachment?.file]
                            }
                        }
                    }
                    const { attachments, ...rest } = res.data
                    if (res.data.completed) {
                        router.replace("/portal/disclosures")
                    } else {
                        setData({ attachments: resAttacthments, ...rest })
                    }
                })
                .catch(err => {
                    console.log(err)
                    toastnotify("Failed To Fetching Data. Please Try Again")
                    window.location.href = "/portal/disclosures"
                }).finally(() => {
                    setFetchingPrevData(false)
                })
        }
    }, [])



    return (
        <div className=''>
            {fetchingPrevData && <div className='fixed z-[70] inset-0 flex items-center justify-center bg-gray-200/50'>
                <nav className='button-processingloader !bg-gray-700'>
                </nav>
                <nav className=' text-base'>Getting Recent Data</nav>
            </div>}
            {data.completed && <div className=' fixed z-[70] flex flex-col gap-3 items-center justify-center inset-0 bg-gray-100/35 backdrop-blur-md'>
                <FormCompletedStatus />
                <div className='font-semibold text-xl text-[#0284c7] '>
                    Your Application Has Been Submitted
                </div>
                <Link className='button font-semibold bg-sky-100 !text-sky-900 cursor-pointer min-h-10 text-center flex items-center justify-center gap-2 ' href="/portal/disclosures">
                    My Submissions
                </Link>
            </div>}
            <div className='container mx-auto py-5'>
                <div className='bg-sky-100 p-5  text-[var(--primary-blue)] text-xl rounded-md border border-sky-300'>
                    Entity Application - Representative
                </div>
                <SimpleStepper
                    processing={processing}
                    setData={setData}
                    data={data}
                    steps={IndividualSelfApplicationSteps}
                    errors={errors}
                    submitHandler={handleFormSubmission}
                    setErrors={setErrors}
                    handleOnStepComplete={handleOnStepComplete}
                />
            </div>
        </div>
    )
}

export default Page