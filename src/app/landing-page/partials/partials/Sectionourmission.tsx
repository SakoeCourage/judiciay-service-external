import React from 'react'
import Link from 'next/link';

export default function Sectionourmission() {
  return (

    <section className="text-gray-600 body-font py-5 pb-10 bg-indigo-50 pt-20">
      <div className="container px-5  mx-auto">
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='w-full md:w-3/5 lg:w-3/5 flex-row'>
            <nav className='text-blue-800 font-bold text-center md:text-left  '>Program and services</nav>
            <nav className='text-sm mt-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </nav>
          </div>
          <div className="flex flex-grow flex-wrap -m-4" >
            <div className="p-4 w-full md:w-1/3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-once="true">
              <div className="flex rounded-lg border shadow-sm border-blue-200 hover:border-blue-300 transform hover:scale-[1.03]  transition-all duration-300 h-full bg-gray-50/90 p-8 flex-col">
                <div className="flex items-start gap-5 mb-3  flex-col">
                  <div className="w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="none" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-blue-900  title-font font-medium ">Business name registeration</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm">
                    Did you know you must register your business if you are trading under a business name
                  </p>
                  <Link href='/' className="mt-3 text-blue-900  flex gap-2 items-center font-medium text-sm">Learn More
                      Arrow forward Iocn
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-delay="50" data-aos-once="true">
              <div className="flex rounded-lg border shadow-sm border-blue-200 hover:border-blue-300 transform hover:scale-[1.03]  transition-all duration-300 h-full bg-gray-50/90 p-8 flex-col">
                <div className="flex items-start gap-5 mb-3  flex-col">
                  <div className="w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="none" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-blue-900  title-font font-medium ">Estate Administration</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm">
                    This covers administering estate of deceased, payment of commuted pension & death gratuity as well trust administration
                  </p>
                  <Link href='/' className="mt-3 text-blue-900  flex gap-2 items-center font-medium text-sm">Learn More
                    Arrow Forward
                  </Link>
                </div>
              </div>
            </div>
            {[...Array(4)].map((_, i) => {
              return (
                <div key={i} className="p-4 w-full md:w-1/3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" data-aos-delay="100" data-aos-once="true">
                  <div className="flex rounded-lg border shadow-sm border-blue-200 hover:border-blue-300 transform hover:scale-[1.03]  transition-all duration-300 h-full bg-gray-50/90 p-8 flex-col">
                    <div className="flex items-start gap-5 mb-3  flex-col">
                      <div className="w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="none" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-blue-900  title-font font-medium ">Intellectual Property</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-sm">
                        An idea, process, brand or product can be protected and prevent other people from benefiting
                      </p>
                      <Link href='/' className="mt-3 text-blue-900  flex gap-2 items-center font-medium text-sm">Learn More
                         Arrow Forward Icon
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}
