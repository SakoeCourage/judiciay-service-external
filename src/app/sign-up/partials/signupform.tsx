"use client"
import React from 'react'
import { Input } from '@app/app/components/form-components/input'
import { Button } from '@app/app/components/form-components/button'
import Link from 'next/link'
import ContactInput from '@app/app/components/form-components/contactinput'
import OAuthList from './oauthlist'
import Api from '@app/app/fetch/axiosInstance'
import useForm from '@app/app/hooks/formHook/useForm'
import { signUpDto } from '@app/app/types/dtos'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { toastnotify } from '@app/providers/Toastserviceprovider'
import { AxiosResponse } from 'axios'

function SignUpForm() {
    const router = useRouter()
    const { post, setData, data, errors, processing, setErrors, setValidation } = useForm<Partial<signUpDto>>({})

    setValidation({
        surname: z.string().min(1, "This Field Is Required"),
        otherNames: z.string().min(1, "This Field Is Required"),
        password: z.string().min(1, "This Field Is Required"),
        email: z.string().email(),
        contactNumber: z.string().min(5, "This Field Is Required"),
        passwordConfirmation: z.string().min(1, "This Field Is Required")
            .refine((value) => value === data.password, {
                message: "Passwords do not match",
                path: ["password"]
            })
    })

    const handleFormSubmission = (e: React.FormEvent) => {
        e.preventDefault()
        post('/client/users', {
            // onError: (err: AxiosResponse) => { toastnotify(err.data); console.log(err) },
            onSuccess: () => {
                toastnotify("Account Created Succesfully", 'Success')
                router.push('/login')
            }
        })
    }

    return (
        <form onSubmit={handleFormSubmission} className='flex max-w-md w-full items-center justify-center'>
            <div className='py-10 w-full '>
                <nav className=' flex flex-col  gap-6  text-[#121417] w-full'>
                    <nav className=' font-semibold text-2xl '>
                        Sign Up
                    </nav>
                    <nav className='text-gray-600 text-sm '>
                        Welcome to the GRA-VOLUNTARY DISCLOSURE PROGRAM Portal.<br />
                        Please Provide Your Credentials Below To SignUp
                    </nav>
                    <nav className="flex flex-col gap-5 w-full">
                        <nav className="flex items-center gap-3 w-full">
                            <Input
                                onChange={(e) => setData('surname', e.target.value)}
                                error={errors.surname}
                                value={data.surname}
                                className='grow'
                                label='Surname'
                                placeholder='Enter Surname'
                                required
                            />
                            <Input
                                onChange={(e) => setData('otherNames', e.target.value)}
                                error={errors.otherNames}
                                value={data.otherNames}
                                className='grow'
                                label='Other Names'
                                placeholder='Enter Other Names'
                                required
                            />
                        </nav>
                        <Input
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                            value={data.email}
                            label='Email'
                            placeholder='example@email.com'
                            required
                        />
                        <ContactInput
                            onChange={(v) => setData('contactNumber', v)}
                            error={errors.contactNumber}
                            value={data.contactNumber}
                            label="Contact Number"
                            placeholder='(000) 0000 000'
                            required
                            disableDropdown={false}
                        />
                        <Input
                            onChange={(e) => setData('password', e.target.value)}
                            error={errors.password}
                            value={data.password}
                            label='Password'
                            placeholder='Enter Password'
                            required
                            type='password'
                        />
                        <Input
                            onChange={(e) => setData('passwordConfirmation', e.target.value)}
                            error={errors.passwordConfirmation}
                            value={data.passwordConfirmation}
                            label='Comfirm Password'
                            placeholder='Enter Password Confirmation'
                            required
                            type='password'
                        />
                        <Button processing={processing} type='submit' variant='primary' className=' rounded-lg'>
                            Sign Up
                        </Button>
                        <nav className='mx-auto add-strike text-xs w-max  text-gray-400'>Or SignUp With</nav>
                        <OAuthList />
                        <nav className='text-gray-600 text-sm text-center'>
                            <span className='block'>Already have an account?</span>
                            <nav className='block '>
                                <Link className='mx-1 text-blue-700 underline' href="/login">Sign In</Link>
                            </nav>
                        </nav>
                    </nav>

                </nav>
            </div>
        </form>

    )
}

export default SignUpForm