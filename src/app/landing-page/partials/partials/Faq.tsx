import React from 'react'


export default function Faq() {
    return (
        <div>

            <div className="container mx-auto">
                <div className=" container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    <div className='flex  flex-col md:flex-row'>
                        <div className="text-center md:text-left w-full md:w-3/5">
                            <h2 className="text-blue-800 font-bold">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <section className="text-gray-600 ">
                            <div className=" px-5   flex flex-wrap">
                                {[...Array(3)].map((_,i) => {
                                    return(
                                        <div key={i} className="flex relative pt-10 pb-14 sm:items-center md:w-2/3 ">
                                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-6 h-6 p-1 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">

                                              Question Mark Icon

                                            </div>
                                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-aos="fade-left"  data-aos-once="true" data-aos-duration="700" >
                                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 bg-indigo-100 p-2 rounded-md">
                                                    <h2 className="font-medium title-font text-gray-900 mb-1 ">Can you get this question?</h2>
                                                    <p className="leading-relaxed text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a sapien justo. Nam in mattis tellus. Maecenas a purus lacinia, vulputate eros sit amet, ultrices lorem</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                

                            </div>
                        </section>
                    </div>
                    <div className="text-center">
                        <a  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                               Launch Icon
                            <span className='text-sm'>Go to support center</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
