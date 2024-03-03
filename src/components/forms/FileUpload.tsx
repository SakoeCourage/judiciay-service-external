"use client";
import React, { useState } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      instantUpload={false}
      allowReplace={true}
      allowMultiple={true}
      maxFiles={3}
      server=""
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
  );
};

export default FileUpload;
