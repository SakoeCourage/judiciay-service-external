import React from 'react'
import OAuthCard, { OAuthProviders } from './oauthcard'
function OAuthList() {
    return (
        <nav>
            <nav className='flex items-center gap-2'>
                {
                    OAuthProviders.map((provider, i) => <OAuthCard key={i} {...provider} />)
                }
            </nav>
        </nav>
    )
}

export default OAuthList