"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { handleSignOut } from "@app/providers/Authserviceprovider/userAuthentication";

const Header = () => {
  const { data, status } = useSession()
  return (
    <div className="w-full  bg-[#155C9B] h-32 flex items-center py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image src="/images/gra-logo.png" alt="logo" quality={100} width={100} height={70} priority className="w-28" />
          {status === "authenticated" &&
            <nav className="  ml-auto">
              {/* <Accountsmenu /> */}
            </nav>}

          <div className="flex gap-4 items-center ">
            <Link
              href=""
              className=" text-white hidden lg:block px-2 md:pr-4 py-2 text-xs md:text-sm border-r border-blue-50"
            >
              VDP Offer
            </Link>
            {['unauthenticated', 'loading'].includes(status)
              && <>
                <Link
                  href="/sign-up"
                  className="text-white pr-4 md:px-4 py-2 text-xs md:text-sm border-r border-blue-50"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className=" text-white  md:px-4 py-2 text-xs md:text-sm "
                >
                  Sign In
                </Link></>

            }
            <nav className="hidden lg:flex items-center h-full">

              {
                status === "authenticated" && <>
                  <Link
                    href="/portal/home"
                    className=" text-white px-2 md:pl-0 md:pr-4 py-2 text-xs md:text-sm "
                  >
                    Dashboard
                  </Link>
                  <nav className='border-l min-h-full border-white pl-2 flex items-center gap-3 text-blue-50'>
                    <nav className='h-[2.0rem] w-[2.0rem] rounded-full bg-sky-600 flex items-center justify-center overflow-hidden object-cover'>
                      <nav className=' overflow-hidden h-12 w-12 shadow  font-medium rounded-full  p-1 aspect-square uppercase flex items-center justify-center gap-[0.20rem]'>
                        {data?.user?.surname?.charAt(0)}.{data?.user?.otherNames?.charAt(0)}
                      </nav>
                    </nav>
                    <nav>
                      {data?.user?.surname} {data?.user?.otherNames}
                    </nav>
                    <button onClick={handleSignOut} className="border-l border-white px-2">
                      logout
                    </button>
                  </nav>

                </>
              }
            </nav>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
