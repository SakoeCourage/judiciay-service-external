"use client"

import classNames from "classnames"
import React, { useEffect, useState } from 'react'
import { Label } from "./label"
import { ButtonProps, Button } from "./button"
import IconifyIcon from "../ui/IconifyIcon"


export interface ISelectparams extends ButtonProps {
    label?: string | React.ReactNode,
    required?: boolean,
    options: { key: string, value: any, disabled?: boolean }[],
    value?: string | number,
    placeholder?: string,
    className?: string,
    onChange?: (v: string | number | boolean) => void
    error?: string
}

function Selectbubbles(props: ISelectparams) {
    const { label, options, required, placeholder, className, error, onChange, value, ...rest } = props
    const [selectValue, setSelectValue] = useState<string | number | boolean>("")

    function handleOnValueChange(v: string | number | boolean) {
        if (v == null) return
        setSelectValue(v)
        onChange && onChange(v)
    }

    React.useEffect(() => {
        if (value == "" || value == null) {
            handleOnValueChange("")
        } else {
            handleOnValueChange(value)
        }
    }, [value])





    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <Label className="flex items-center gap-1">{label}
                {props.required && <abbr className="text-red-500" title="This field is required ">*</abbr>}
            </Label>}

            <div className="relative ">
                {error && <nav className="w-max v-error-container absolute top-0 bottom-0 right-0 text-red-500 flex gap-1 items-center px-2">
                    <nav className="hidden backdrop-blur-sm text-sm v-error-message">
                        {error}
                    </nav>
                    <svg className="cursor-pointer ml-auto v-error-svg text-red-400 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" /></svg>
                </nav>}
                <div className={`w-full text-gray-600 bg-white ${error && 'border-red-400'}`}>
                    <nav className="bg-white " >
                        {placeholder}
                    </nav>
                </div>
                <div
                    className={
                        classNames(
                            {
                                "z-[60] flex items-start gap-4 mt-1": true
                            }
                        )
                    }>
                    {options.map((option, i) => (
                        <Button className="!rounded-full" size="sm" variant={option.value === selectValue ? "success" : "outline"}  {...rest} onClick={() => handleOnValueChange(option.value)} disabled={option.disabled ?? false}
                            key={i} value={option.value}>
                            {option.key}
                        </Button>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default Selectbubbles