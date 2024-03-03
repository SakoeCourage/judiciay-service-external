import React from 'react'
import SignUpForm from './partials/signupform'
import LoginNavBar from '../landing-page/partials/partials/LoginNavBar'
import Footer from '../landing-page/partials/partials/Footer'
function page() {
    return (
        <div className=''>
            <LoginNavBar />
            <div className='container mx-auto   flex items-center justify-center'>
                <SignUpForm />
            </div>
            <Footer />
        </div>
    )
}

export default page