import { handleSignOut } from "@app/providers/Authserviceprovider/userAuthentication"
import { useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@app/app/components/ui/dropdown";
import IconifyIcon from "@app/components/ui/IconifyIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Accountsmenu = (): React.JSX.Element => {
    const { status, data } = useSession()
    return <DropdownMenu >
        <DropdownMenuTrigger asChild className='ml-auto'>
            <div className="lg:hidden flex">
                <nav className=' border-white pl-2 flex items-center gap-3 text-blue-50'>
                    <nav className='h-[2.0rem] w-[2.0rem] rounded-full bg-sky-600 flex items-center justify-center overflow-hidden object-cover'>
                        <nav className=' overflow-hidden h-12 w-12 shadow  font-medium rounded-full  p-1 aspect-square uppercase flex items-center justify-center gap-[0.20rem]'>
                            {data?.user?.surname?.charAt(0)}.{data?.user?.otherNames?.charAt(0)}
                        </nav>
                    </nav>
                </nav>
            </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-white z-[80] min-w-[16rem] mr-4'>
            <div className="px-2 py-6 flex items-center gap-3  border-b">
                <IconifyIcon icon="ph:user" />
                <nav className=" flex items-start justify-center gap-1">
                    <p className=" text-base font-semibold ">{data?.user?.surname}</p>
                    <p className="text-base ">{data?.user?.otherNames}</p>
                </nav>
            </div>

            <div className="border-b">
                <Link href="/portal/home" className="px-2 py-2 hover:bg-gray-100 flex">
                    <IconifyIcon icon="mdi-light:view-dashboard" />
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">Dashboard</p>
                        <p className="text-xs text-gray-500">View a summary of your applications status</p>
                    </div>
                </Link>
                <Link href="/portal/disclosures" className="px-2 py-2 hover:bg-gray-100 flex">
                    <IconifyIcon icon="fluent:task-list-square-rtl-16-regular" />
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">My Disclosures</p>
                        <p className="text-xs text-gray-500">View your disclosures</p>
                    </div>
                </Link>
            </div>
            <div className=" mt-1">
                <button onClick={handleSignOut} className="px-4 py-3 w-full  bg-blue-100/70 rounded-xl text-white flex gap-4 items-center justify between ">
                    <nav className="p-1 h-5 w-5 aspect-square rounded-full text-gray-500  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="15" width="15" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                    </nav>
                    <p className="text-sm font-medium text-gray-800 leading-none">Logout</p>
                </button>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>


}