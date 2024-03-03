import Select2options from 'app/app/components/form-components/select2options'
import { Input } from 'app/app/components/form-components/input'
import React, { useEffect } from 'react'
import IconifyIcon from '@app/app/components/ui/IconifyIcon'

export type PlaintiffType = "Corporate Body" | "Individual" | ""


export interface plaintiffMetaData {
    Name: string,
    Address: string,
    Phone: string
    PlaintiffType: PlaintiffType,
    TinNumber: string,
    EcowasCard: string
}


export interface IchangeData {
    key: keyof plaintiffMetaData,
    value: string,
    index: number
}


export const isIndividualPlaintiff = (p: plaintiffMetaData) => {
    return p.PlaintiffType == 'Individual';
}
export const isCorporatePlaintiff = (p: plaintiffMetaData) => {
    return p.PlaintiffType == "Corporate Body"
}

function Plaintiff(props: plaintiffMetaData & {
    changePlaintiffDataAtIndex: ({ index, key, value }: IchangeData) => void,
    index: number,
    removePlaintiffAtIndex: (index: number) => void,
    theme: string
}) {
    const { Name, PlaintiffType, Address, Phone, EcowasCard, TinNumber, theme, changePlaintiffDataAtIndex, index, removePlaintiffAtIndex } = props

    return <div className='plaintiff-item grid grid-cols-1 md:grid-cols-2  gap-5 !py-3 !px-2'>
        <nav className='md:col-span-2 border-b text-xs flex items-center justify-between text-gray-400 pb-1'>
            <span>{theme} - {index + 1}</span>
            <button onClick={() => removePlaintiffAtIndex(index)} className=' text-red-400 px-2 py-1 rounded-full border border-red-300'>Remove {theme} - {index + 1}</button>
        </nav>
        <Select2options
            onChange={(v) => { changePlaintiffDataAtIndex({ index: index, key: "PlaintiffType", value: v }) }}
            value={PlaintiffType} label={`${theme} Type`} placeholder={`Select Type Of ${theme}`} className='' data={[{ value: "Corporate Body", label: "Corporate Body" }, { value: "Individual", label: "Individual" }]} />
        {isCorporatePlaintiff(props) && <>
            <Input
                value={TinNumber}
                label='Tin Number'
                placeholder='Enter Tin Number'
                onChange={(e) => { changePlaintiffDataAtIndex({ index: index, key: "TinNumber", value: e.target.value }) }}
            />
        </>}
        {isIndividualPlaintiff(props) && <>
            <Input
                value={EcowasCard}
                label='ECOWAS Card Number'
                placeholder='Enter ECOWAS Card Number'
                onChange={(e) => { changePlaintiffDataAtIndex({ index: index, key: "EcowasCard", value: e.target.value }) }}
            />
        </>}
        <Input
            onChange={(e) => { changePlaintiffDataAtIndex({ index: index, key: "Name", value: e.target.value }) }}
            value={Name}
            label={`${theme} Name`}
            placeholder={`${theme} Name`}
        />
        <Input
            onChange={(e) => { changePlaintiffDataAtIndex({ index: index, key: "Address", value: e.target.value }) }}
            value={Address}
            label={`${theme} Address`}
            placeholder={`${theme} Address`} />
        <Input
            onChange={(e) => { changePlaintiffDataAtIndex({ index: index, key: "Phone", value: e.target.value }) }}
            value={Phone}
            label={`${theme} Phone`}
            placeholder={`${theme} Phone`}
        />
    </div>

}

const initialData: plaintiffMetaData = {
    Name: "",
    Address: "",
    Phone: "",
    EcowasCard: "",
    TinNumber: "",
    PlaintiffType: ""
}

function Plaintifflist({ theme }: { theme: string }) {
    const [plaintiffList, setPlaintiffList] = React.useState<plaintiffMetaData[]>(
        [structuredClone(initialData)])


    const changePlaintiffDataAtIndex = ({ index, key, value }: IchangeData) => {
        const currentData = [...plaintiffList];
        currentData[index][key] = value
        setPlaintiffList(currentData);

    }

    const handleOnAddNewPlaintiff = () => {
        setPlaintiffList(cv => cv = [...cv, structuredClone(initialData)])
    }

    const removePlaintiffAtIndex = (index: number) => {
        setPlaintiffList(currentData => currentData.filter((_, i) => i !== index));
    }


    return (
        <div className='flex flex-col gap-2 divide-y-2 py-2'>
            {plaintiffList.map((plaintiff, i) => <Plaintiff
                index={i}
                theme={theme}
                {...plaintiff}
                removePlaintiffAtIndex={removePlaintiffAtIndex}
                changePlaintiffDataAtIndex={changePlaintiffDataAtIndex}

            />)}
            <button onClick={handleOnAddNewPlaintiff} className=' px-5 py-3  text-gray-400 flex items-center justify-center gap-2 font-semibold text-sm border border-dashed rounded-md'>
                <IconifyIcon className='' icon='ph:plus' />  Click To Add {theme}
            </button>
        </div>
    )
}

export default Plaintifflist