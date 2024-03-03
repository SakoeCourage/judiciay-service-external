"use client"
import React, { useState } from 'react'
import { Input } from '@app/app/components/form-components/input'
import { Button } from '@app/app/components/form-components/button'
import Image from 'next/image'
import Link from 'next/link'
import OAuthList from '@app/app/sign-up/partials/oauthlist'
import { RequestEvents } from '@app/app/fetch/apiEvent'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { toastnotify } from '@app/providers/Toastserviceprovider'

interface userLoginCredentials {
    username: string,
    password: string
}

const initialData: userLoginCredentials = {
    username: "",
    password: ""
}

function LoginForm() {
    const searchParam = useSearchParams();
    const router = useRouter();
    const [loginCredentials, setLoginCredentials] = useState<userLoginCredentials>(initialData)
    const [errors, setErrors] = useState<userLoginCredentials>(initialData)
    const [loading, setIsLoading] = useState<boolean>(false)

    const schema = z.object({
        username: z.string().min(3, "Username is required"),
        password: z.string().min(3, "Password is required")
    })
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const callbackUrl = window.localStorage.getItem(RequestEvents.REQUEST_CALLBACK_URL_CONSTACT);
        setErrors(initialData)
        try {
            return Promise.resolve("ok")
            setIsLoading(true)
            schema.parse(loginCredentials)
            const data = await signIn("credentials", {
                email: loginCredentials.username,
                password: loginCredentials.password,
                redirect: false
            })
            if (data) {
                const { error, status, ok, } = data
                if (error) throw new Error(error)
                if (ok == true) window.location.href = callbackUrl ?? '/portal/home'
                window.localStorage.removeItem(RequestEvents.REQUEST_CALLBACK_URL_CONSTACT)
            }
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof z.ZodError) {
                error.issues.forEach((err) => {
                    setErrors(cv => ({ ...cv, [err.path[0]]: err.message }));
                });
            } else if (error instanceof Error) {
                toastnotify("Invalid Email or Password")
            } else {
                toastnotify("Sign in failed. Try again later")
            }
            setIsLoading(false)
        } finally {
            
        }

    }
    return (
        <form onSubmit={handleLogin} className='flex items-center justify-center h-[calc(100vh-var(--header-height))] '>
            <div className=' max-w-md mx-auto w-full py-10 '>
                <nav className=' flex flex-col  gap-6 w-full text-[#121417] '>
                    <nav className=' font-semibold text-2xl '>
                        Sign In
                    </nav>
                    <nav className='text-gray-600 text-sm'>
                        Welcome to the GRA-VOLUNTARY DISCLOSURE PROGRAM Portal. <br /> Sign in with your email and password.
                    </nav>
                    <nav className="flex flex-col gap-5 w-full">
                        <Input
                            value={loginCredentials.username}
                            error={errors.username}
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, username: e.target.value })}
                            label='Email'
                            placeholder='example@email.com'
                            required
                        />
                        <Input
                            value={loginCredentials.password}
                            error={errors.password}
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                            label='Password'
                            placeholder='Enter Password'
                            required
                            type='password'
                        />
                        <Button processing={loading} variant='primary' className=' rounded-lg'>
                            Sign In
                        </Button>
                        <nav className='mx-auto add-strike text-xs w-max text-gray-400'>Or Sign In With</nav>
                        <OAuthList />
                        <nav className='text-gray-600 text-sm text-center'>
                            <span className='block'>Forgot your username or password?</span>
                            <nav className='block '>
                                <span className=''>Don&#39;t have an account?</span>
                                <Link className='mx-1 text-blue-700 underline' href="/sign-up">Sign Up Here</Link>
                            </nav>
                        </nav>
                    </nav>

                </nav>
            </div>
        </form>

    )
}

export default LoginForm