import React, { useState } from 'react'
import { uploadFileAPI } from '../../../api/uploadFileAPI';

function Home() {
    const [imgFile, setImgFile] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pI20UCe27fIpxl4iY03HqCqT2e3E6JiFRQ&s')
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {

            setImgFile(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file);
            const res = uploadFileAPI({ file: file });
            res.then((res) => {
                console.log("link anh", res.data);
            }).catch((err) => {
                console.log("Errr");
            })
        }
    }
    return (
        <>
            <input type="file" onChange={(e) => handleFileChange(e)} />

            <img src={imgFile} />
            <h1>Anh sau khi up </h1>
            <img src='https://storage.googleapis.com/download/storage/v1/b/project-javaweb.appspot.com/o/2024-07-20_19-43-28Rectangle%202.png?generation=1721479408463968&alt=media' />
        </>
    )
}

export default Home