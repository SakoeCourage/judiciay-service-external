export type getCurrentStep = () => Step<any> | undefined
export type onNextStep = () => void;
export type onPrevStep = () => void;
export type isLastStep = () => boolean;
export type isFirstStep = () => boolean;
export type onStepChange = (currentstep: Step<any>) => void
import React from "react";
import { setData, data, errors } from '@app/app/hooks/formHook/useFormtypes'

export type StepperComponent<T> = React.FC<{ setData: setData<T>, data: data<T>, errors: errors<T> }>

export type Step<T> = {
    label: string | React.ReactNode,
    component: React.FC<{ setData: setData<T>, data: data<T>, errors: errors<T> }>
    validationFields: Partial<keyof T>[],
    validationLink: string
}
export interface stepperApi {
    getCurrentStep: getCurrentStep;
    onNextStep: onNextStep;
    onPrevStep: onPrevStep;
    isLastStep: isLastStep;
    isFirstStep: isFirstStep;

}
export type stepperOptions = {
    scrollable?: {
        enable: boolean,
        scrollableElement: string,
        offset?: number,
    }
}
export interface IStepperOPtions<T> {
    steps: Step<T>[]
    onStepChange?: onStepChange
    options?: stepperOptions
}