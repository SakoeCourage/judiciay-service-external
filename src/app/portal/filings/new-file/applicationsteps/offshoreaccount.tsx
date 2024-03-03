import React, { useEffect, useState } from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import DataTable from '@app/app/components/datatable/datatable'
import { ColumnDef } from '@tanstack/react-table'
import Noticecard from '@app/app/components/ui/noticecard'
import Modal from '@app/app/components/ui/modal'
import OffshoreAccountForm from './offshoreaccountform'
import IconifyIcon from '@app/app/components/ui/IconifyIcon'
import Tooltip from '@app/app/components/ui/tooltip'
import { toastnotify } from '@app/providers/Toastserviceprovider'
import { offShoreAccountDto } from '@app/app/types/dtos'

const OffshoreAccount: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { setData, data } = props
    const { accounts } = data
    const [currentOffShoreAccountDetails, setCurrentOffShoreAccountDetails] = useState<offShoreAccountDto | null>(null)

    const addOrUpdateshoreAccountList = (newData: offShoreAccountDto) => {
        console.log(newData)
        console.log("accounts", accounts)
        try {
            if (!newData.accountNumber) return
            const existingIndex = accounts.findIndex((d: offShoreAccountDto) => d.accountNumber.toLowerCase() === newData.accountNumber.toLowerCase());
            if (existingIndex !== -1) {
                const updatedData = [...accounts];
                updatedData[existingIndex] = newData;
                setData('accounts', updatedData)
                toastnotify("Offshore account updated", "Success");
            } else {
                setData('accounts', [...accounts, newData]);
                toastnotify("New offshore account added to list", "Success");
            }
            setCurrentOffShoreAccountDetails(null);
        } catch (error) {
            console.log(error)
        }
    }


    const removeOffShoreAccount = (accountNumber: string) => {
        if (!accountNumber) return
        const indexToRemove = accounts.findIndex(item => item.accountNumber.toLowerCase() === accountNumber.toLowerCase());
        if (indexToRemove !== -1) {
            const newData = [...accounts];
            newData.splice(indexToRemove, 1);
            setData('accounts', newData);
        } else {
            toastnotify("Failed to remove offshore account: Account number not found", "Error");
        }
    };

    useEffect(() => {
        console.log(accounts)
    }, [accounts])



    const columns: ColumnDef<offShoreAccountDto>[] = [
        {
            accessorKey: "accountNumber",
            header: "Account Number",
        },
        {
            accessorKey: "currency",
            header: "Currency",
        },
        {
            accessorKey: "amount",
            header: "Amount",
        },
        {
            accessorKey: "accountType",
            header: "Account Type",
        },
        {
            accessorKey: "financialInstitution",
            header: "Financial Institution",
        },
        {
            accessorKey: "totalGrossAmount",
            header: "Total Gross Amount",
        },
        {
            accessorKey: "",
            header: "Action",
            cell: ({ row }) => <div className='flex items-center gap-1 '>
                <Tooltip toolTipText='Edit or View Account Details'>
                    <IconifyIcon onClick={() => setCurrentOffShoreAccountDetails(row?.original)} className='text-sky-500 cursor-pointer bg-sky-50' icon='carbon:view' />
                </Tooltip>
                <Tooltip toolTipText='Remove Account Record'>
                    <IconifyIcon onClick={() => removeOffShoreAccount(row?.original?.accountNumber)} className='text-red-500 bg-red-50' icon='ic:outline-delete' />
                </Tooltip>
            </div>
        }
    ]


    return (
        <div className=''>
            <Modal
                size="lg"
                open={currentOffShoreAccountDetails != null ? true : false}
                title={currentOffShoreAccountDetails?.accountNumber ? "Update Offshore Account" : "Add An OffShore Account"}
                closeModal={() => setCurrentOffShoreAccountDetails(null)}
            >
                <OffshoreAccountForm
                    onCancel={() => void (0)}
                    onNewDataSucess={() => void (0)}
                    formData={currentOffShoreAccountDetails}
                    addOrUpdateshoreAccountList={addOrUpdateshoreAccountList}
                />
            </Modal>
            <Noticecard className='mb-3'>
                <ul className='flex flex-col gap-1 list-disc'>
                    <li>To add an offshore account, click on + Add Account</li>
                    <li>To alter an entry click on the corresponding action buttons in the action column</li>
                </ul>
            </Noticecard>
            <DataTable
                data={accounts}
                onAction={() => setCurrentOffShoreAccountDetails({} as offShoreAccountDto)}
                actionName='Add Account'
                columns={columns}
            />

        </div>
    )
}

export default OffshoreAccount