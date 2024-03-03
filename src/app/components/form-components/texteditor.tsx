import React, { useEffect, useLayoutEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from '@ckeditor/ckeditor5-core/src/editor/editor'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Label } from './label';

interface IEditorInterface {
    label?: string,
    required?: boolean,
    error?: string | null,
    placeholder?: string,
    className?: string
    name: string,
}




function Texteditor(props: IEditorInterface) {
    const { label, name,required, className, placeholder, error, } = props;
    const handleOnBlur = () => {
        const top = document.querySelector(`.${name} .ck-editor__top`)
        if (top) {
            top.classList.remove('unblur-top')
        }
    }
    const handleOnFocus = () => {
        const top = document.querySelector(`.${name} .ck-editor__top`)
        if (top) {
            top.classList.add('unblur-top')
        }
    }

    return (
        <div>
            <div className={`flex flex-col gap-2  ${className}`}>
                {label && <Label className="flex items-center gap-1">{label}
                    {required && <abbr className="text-red-500" title="This field is required ">*</abbr>}
                </Label>}
                <div className={`relative ${name}`}>
                    {error && <nav className="w-max v-error-container absolute top-0 bottom-0 right-0 text-red-500 flex gap-1 items-center px-2">
                        <nav className="hidden backdrop-blur-sm text-sm v-error-message">
                            {error}
                        </nav>
                        <svg className="cursor-pointer ml-auto v-error-svg text-red-400 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" /></svg>
                    </nav>}
                    <CKEditor
                        editor={ClassicEditor}
                        config={
                            {
                                placeholder: placeholder,
                            }
                        }
                        data=""
                        onReady={editor => {

                        }}
                        onChange={(event) => {
                            console.log(event);
                        }}
                        onBlur={(event, editor) => {
                            handleOnBlur()
                        }}
                        onFocus={(event, editor) => {
                            handleOnFocus()
                        }}
                    />

                </div>

            </div>

        </div>
    )
}

export default Texteditor