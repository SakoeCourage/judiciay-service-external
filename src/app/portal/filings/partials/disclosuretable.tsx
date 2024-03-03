"use client"
import React from 'react'
import DataTable from '@app/app/components/datatable/datatable'
import { ColumnDef } from '@tanstack/react-table'
import { IApplication, applicationList } from '../disclosuretype'
import IconifyIcon from '@app/components/ui/IconifyIcon'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import { dateReformat } from '@app/app/lib/utils'
import Link from 'next/link'

const disclosureContinueLinks = {
    "Self": "/portal/disclosures/new-application/individual-self-application",
    "Individual Representative": "/portal/disclosures/new-application/individual-rep-application",
    "Entity Representative": "/portal/disclosures/new-application/entity-rep-application"
}

function DisclosureTable() {
    const colums: ColumnDef<applicationIndividualSelfDto>[] = [
        {
            accessorKey: "type",
            header: "Application Type"
        },
        {
            accessorKey: "createdAt",
            header: "Created At",
            cell: ({ row }) => dateReformat(row.original.createdAt)
        },
        {
            accessorKey: "accountsSubmitting",
            header: "No. Of Accounts"
        },
        {
            accessorKey: 'clientStatus',
            header: "Status"
        },
        {
            accessorKey: "completed",
            header: "Completed",
            cell: ({ row }) => row.original.completed ? "Yes" : "No"
        },
        {
            accessorKey: "",
            header: "Action",
            cell: ({ row }) => <>
                {row.original.completed ?
                    "No Action Required" :
                    <Link href={`${disclosureContinueLinks[row.original.type]}?application_id=${row.original.id}`} role="navigation" className=' whitespace-nowrap  flex items-center gap-1 cursor-pointer'>
                        <nav className=' whitespace-nowrap flex rounded-full p-1 px-2 bg-white border text-[var(--primary-blue)] border-[var(--primary-blue)] items-center text-xs'>
                            <nav>Continue</nav>
                            <IconifyIcon fontSize="1.1rem" className=' whitespace-nowrap bg-transparent !p-0 !w-[1rem] !h-[1rem]' icon='material-symbols:chevron-right' />
                        </nav>
                    </Link>
                }
            </>



        }
    ]
    return (
        <div className=' container mx-auto'>
            <DataTable
                columns={colums}
                dataSourceUrl='/client/documents?pageSize=10&page=1&sort=createdAt_desc'
                hasAction={false}
                filterable='type'
                filterablePlaceholder='Search Application'
            />
        </div>
    )
}

export default DisclosureTable