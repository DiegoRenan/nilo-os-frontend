import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Field } from 'redux-form'

function UploadAvatar() {
  let image;
  const onDrop = useCallback((acceptedFiles) => {
    var preview = document.querySelector('img');

    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => console.log('file loading')
      
      //reader.readAsArrayBuffer(file)

      reader.onloadend = function () {
        preview.src = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }

    })  

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <img src="" height="200" alt="Prévia da imagem..."/>
    </div>
  )
}

export default props => <Field {...props} component={UploadAvatar} />;