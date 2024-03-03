import React from 'react'
import FileViewer from 'react-file-viewer';

function Fileview({ file, type, open }: { file: File, type: string, open: boolean }) {
  return open && file && <FileViewer
    fileType={type}
    filePath={file}
    onError={(e) => console.log(e)} />
}

export default Fileview