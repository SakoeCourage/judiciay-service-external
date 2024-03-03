import React from 'react'
import ContactInput from '@app/app/components/form-components/contactinput'
import IconifyIcon from '@app/app/components/ui/IconifyIcon'
import classNames from 'classnames'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export interface IOAuthProvider {
    name: string,
    icon: string,
    callbackUrl: string,
    link: string,
    onAction: () => void,
    theme: React.CSSProperties

}

export const OAuthProviders: Array<IOAuthProvider> = [
    {
        name: "Google",
        icon: "akar-icons:google-fill",
        callbackUrl: "",
        link: "",
        theme: { color: "#f87171" },
        onAction: async () => {
            await signIn('google', {
                callbackUrl: '/',
                redirect: false
            })
        }
    },
    {
        name: "Microsoft",
        icon: "gg:microsoft",
        callbackUrl: "",
        link: "",
        theme: { color: "#ea580c" },
        onAction: async () => {
            await signIn('google', {
                callbackUrl: '/',
                redirect: false
            })
        }

    },
    {
        name: "Facebook",
        icon: "fe:facebook",
        callbackUrl: "",
        link: "",
        theme: { color: "#0284c7" },
        onAction: async () => {
            await signIn('google', {
                callbackUrl: '/',
                redirect: false
            })
        }


    },
]


const OAuthCard: React.FC<IOAuthProvider> = (props) => {
    const { name, icon, callbackUrl, link, theme, onAction } = props
    return <button
        type='button'
        onClick={() => onAction()}
        className={classNames({
            "border border-gray-400 grow p-1 aspect-[8/2] rounded-md grid place-items-center": true
        })}>
        <IconifyIcon style={theme} fontSize="1.5rem" className=' bg-transparent' icon={icon} />
    </button>
}



export default OAuthCard