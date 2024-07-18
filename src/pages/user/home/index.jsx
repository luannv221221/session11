import React, { useState } from 'react'

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
            // mang đối file 
            console.log(file);
        }
    }
    return (
        <>
            <input type="file" onChange={(e) => handleFileChange(e)} />
            <img src={imgFile} />
        </>
    )
}

export default Home