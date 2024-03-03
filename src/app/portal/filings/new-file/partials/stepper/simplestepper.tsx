import React, { useState, useMemo, useEffect } from 'react'
import { Button } from '@app/app/components/form-components/button';
import Steplabel from './steplabel';
import Api from '@app/app/fetch/axiosInstance';
import IconifyIcon from '@app/app/components/ui/IconifyIcon';
import { type Step } from './steppertypes';
import { setData, data, errors } from '@app/app/hooks/formHook/useFormtypes'
import { ZodError } from 'zod';
import { toastnotify } from '@app/providers/Toastserviceprovider';
import useForm from '@app/app/hooks/formHook/useForm';
import { usePathname, useRouter } from 'next/navigation';
import { updateUrlQueryParam } from '@app/app/lib/utils';

export interface StepperParams<T> {
    steps: Step<T>[],
    processing: boolean,
    setData: setData<T>,
    data: data<T>,
    errors: errors<T>
    submitHandler: () => Promise<unknown>
    handleOnStepComplete: () => void,
    setErrors?: React.Dispatch<React.SetStateAction<{} | Record<keyof T, string>>>
}
const SimpleStepper: React.FC<StepperParams<any>> = ({ steps, data, errors, handleOnStepComplete, setData, processing, setErrors, submitHandler }) => {
    const { data: currentStepData, setData: setCurrentStepData, post, processing: processingCurrentStep } = useForm<Partial<typeof data>>({})
    const [currentIndex, SetCurrentIndex] = useState(0);
    const Component = steps[currentIndex]?.component
    const isLastStep = useMemo(() => Number(currentIndex) == Number(steps?.length - 1), [currentIndex])
    const pathname = usePathname()
    const route = useRouter();

    const handleScrollToStepperHead = () => {
        const stepperHeadElement = document.querySelector('#stepper-content-head')
        if (stepperHeadElement) {
            stepperHeadElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleOnValidationPass = () => {
        if (isLastStep) {
            handleOnStepComplete()
        } else {
            const validationLink = steps[currentIndex]?.validationLink
            if (validationLink) {
                post(validationLink, {
                    onError: (err) => { toastnotify("Failed to submit forms"); console.log(err) },
                    onSuccess: (res) => {
                        SetCurrentIndex(cv => cv = cv + 1)
                        console.log(res.data)
                        if (res.data?.id) {
                            setData('id', res.data.id)
                            route.push(updateUrlQueryParam(window.location.href, 'application_id', res.data.id))
                        }
                        handleScrollToStepperHead()
                    },
                    config: {
                        asFormData: false,
                        showToastError: false
                    }
                })
            }
        }
        setErrors && setErrors({})
    }

    useEffect(() => {
        setCurrentStepData(data)
    }, [data])

    useEffect(() => {
        const stepperLabelContainer = document.querySelector('#stepper-label-container')
        const currentElement = document.querySelector(".active-step-label");
        if (currentElement && stepperLabelContainer) {
            const containerRect = stepperLabelContainer.getBoundingClientRect();
            const pillRect = currentElement.getBoundingClientRect();
            const offsetLeft = pillRect.left - containerRect.left;
            const pillCenter = (pillRect.left - containerRect.left) + (pillRect.width / 2);
            const scrollLeft = pillCenter - (containerRect.width / 2);
            stepperLabelContainer.scrollBy({
                left: scrollLeft,
                behavior: 'smooth'
            })
    
        }
    }, [currentIndex])



    const handleNextStep = async () => {
        var currentStep = steps[currentIndex]

        try {
            await submitHandler()
            handleOnValidationPass()
        } catch (err) {
            if (err instanceof ZodError) {
                const parsederrors = err.errors.reduce((acc, err) => ({ ...acc, [err.path[0] as keyof typeof data]: err.message }), {})
                if (!!Object.keys(parsederrors).length) {
                    const currentPageValidationErrors = Object.keys(parsederrors).filter(er => currentStep.validationFields.includes(er))
                    if (Boolean(currentPageValidationErrors.length) !== true) {
                        handleOnValidationPass()
                    } else {
                        toastnotify("Failed to process " + currentPageValidationErrors[0].toLocaleUpperCase())
                    }
                }
            }
        }
    }

    const handlePreviousStep = () => {
        if (currentIndex != 0) {
            SetCurrentIndex(cv => cv = cv - 1)
            handleScrollToStepperHead()
        }
    }

    return (
        <div id='stepper-content-head' className='h-full flex flex-col' >
            <div id='stepper-label-container' className=' snap-x flex items-center gap-1 px-2 py-3 border-b overflow-x-scroll overflow-y-hidden hiddenscroll sticky top-[0] bg-white z-20'>
                {steps.map((step, i) => {
                    return <nav key={i} className={`flex items-center gap-1 ${i == currentIndex && 'snap-center'}`}>
                        <Steplabel
                            active={i == currentIndex}
                            completed={currentIndex > i}
                            pending={currentIndex < i}
                            name={step.label}
                            onStepChange={(v) => v < currentIndex && SetCurrentIndex(v)}
                            index={i}
                        />
                        {((steps?.length - 1) != i) && <span className=' bg-gray-400 mx-1 h-2 w-2 rounded-full'></span>}
                    </nav>
                })
                }
            </div>
            <div className=' grow my-auto py-5  px-1 lg:px-10 bg-[#F6F8FA]  rounded-md'>
                <nav className=' border-b text-gray-600 text-lg pb-2 mb-2'>
                    {steps[currentIndex].label}
                </nav>
                <Component data={data} setData={setData} errors={errors} />
            </div>
            <div className='mt-auto s rounded-b-lg flex justify-end items-center p-5 bg-gray-100 '>
                <nav className='flex items-center gap-3'>
                    <Button variant="outline" disabled={currentIndex == 0} onClick={(e) => { e.preventDefault(); handlePreviousStep(); }} >
                        Previous Step
                    </Button>
                    <Button
                        onClick={() => handleNextStep()}
                        processing={processing || processingCurrentStep}
                        className="rounded-lg">
                        {`${isLastStep ? 'Finish and Save' : 'Next Step'}`}
                    </Button>
                </nav>
            </div>
        </div>
    )
}

export default SimpleStepper