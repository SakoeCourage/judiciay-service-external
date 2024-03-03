import React from 'react'
import LoginForm from '../landing-page/partials/partials/LoginForm'
import LoginNavBar from '../landing-page/partials/partials/LoginNavBar'
import Footer from '../landing-page/partials/partials/Footer'

function page() {
    return (
        <div className=''>
            <LoginNavBar />
            <div className='container mx-auto h-screen flex items-center justify-center'>
                <LoginForm />
            </div>
            <Footer />
        </div>

    )
}

export default page