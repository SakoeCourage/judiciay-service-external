import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export function Preloader() {
    return <div className="preloader"
        style={{
            zIndex: "100",
            position: "fixed",
            inset: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            backgroundColor: "white"
        }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: 'center', gap: "1.5rem" }}>
                <Image priority={true} src="/images/gra-logo.png"
                    alt='gra-logo'
                    width={200}
                    height={200}
                    quality={100}
                />
            </div>
        </div>
    </div>
}


function Pagepreloader({ children }: { children: React.ReactNode }) {
    const { status, data } = useSession()

    return <>
        {(status == "loading") ? <Preloader /> : children}
    </>
}

export default Pagepreloader