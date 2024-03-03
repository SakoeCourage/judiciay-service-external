import React, { useMemo, useState } from 'react'
import { StepperComponent } from '../partials/stepper/steppertypes'
import { applicationIndividualSelfDto } from '@app/app/types/dtos'
import Fileupload from '@app/app/components/ui/fileupload'
import Noticecard from '@app/app/components/ui/noticecard'
import { toastnotify } from '@app/providers/Toastserviceprovider'

function convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1];
            const dataUrl = `data:${file.type};base64,${base64String}`;
            resolve(dataUrl);
        };
        reader.onerror = error => reject(error);
    });
}

function converBase64StringToFile(bs64string: string, filename:string): File {
    let file: File | null = null;
    if (typeof bs64string === "string") {
        const inputString = bs64string as string;
        const base64Data = inputString.split(",")[1];
        const startMarker = 'data:';
        const endMarker = ';base64';
        const startIndex = inputString.indexOf(startMarker) + startMarker.length; 
        const endIndex = inputString.indexOf(endMarker); 
        const extension = inputString.substring(startIndex, endIndex);
        const base64Buffer = Buffer.from(base64Data, 'base64');
        const blob = new Blob([base64Buffer]);
        file = new File([blob], filename, { type: extension });
    }
    return file
}

const Attachment: StepperComponent<Partial<applicationIndividualSelfDto>> = (props) => {
    const { data, setData } = props
    const [isUpdatingFiles, setUpdatingFiles] = useState(false)
    const hanleOnGetFiles = async (files: File[]) => {
        
        let currentFiles: string[] = []
      
        if (Boolean(files?.length)) {
             setUpdatingFiles(true)
            const filePromises: Promise<string>[] = []
            files.forEach((file, i) => {
                filePromises.push(convertFileToBase64(file));
            })
            try {
                const handleFileInsertionResponse = await Promise.all(filePromises)
                currentFiles = [...currentFiles, ...handleFileInsertionResponse]
            } catch (error) {
                toastnotify("Failed to load one or more files please refreh page")
            } finally {
                setData('attachments', currentFiles)
                setUpdatingFiles(false)

            }
        } else {
            setData('attachments', [])
        }
    }


   
    const getFilesFormBase64StringsArray = (files: File[]) => {
        let currentFiles: File[] = []
        if (Boolean(files.length)) {
            const filesString: string[] = data?.attachments
            filesString.forEach((fs, i) => {
                const filename = `Attachment - ${i + 1}`; 
                currentFiles = [...currentFiles, converBase64StringToFile(fs, filename)]
            })
        }
        return currentFiles
    }
    

    return (
        <div className='relative isolate'>
            {isUpdatingFiles && <div className='absolute inset-0 flex items-center justify-center bg-gray-100/50'>
                <nav className='button-processingloader !bg-gray-600'>
                </nav>
                <nav className=' text-base'>Updating Files Please Wait</nav>
            </div>}
            <nav className='font-semibold text-base mb-4 text-gray-500 p-1 border-b border-gray-300'>
                BANK STATEMENT/SUPPORTING DOCUMENT(S)
            </nav>
            <nav className=''>
                <Noticecard className='' variant="info">
                    <ul className=' list-disc'>
                        <li>To add files click on the + button</li>
                        <li>To remove a file click on - at the top right on the file</li>
                        <li>Accept Type - PDF</li>
                        <li>You can add multiple files</li>
                        <li>Max Individual File Size - 5mb</li>
                    </ul>
                </Noticecard>
                <Fileupload
                    files={Array.isArray(data?.attachments) && getFilesFormBase64StringsArray(data?.attachments)}
                    getFiles={(f) => hanleOnGetFiles(f as File[])}
                    placeholder='Click to add files' maxNumber={100}
                    maxFileSize={52428800}
                    acceptType={['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']}
                />

            </nav>
        </div>
    )
}

export default Attachment