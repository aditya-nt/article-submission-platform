import React, { useState } from "react";
// import "./App.css";

import { useStorage } from "../../contexts/useStorage";

export default function UploadImage({file: file , setFile  :  setFile , urlSetter : urlSetter}) {
    // const [file, setFile] = ;
    const [error, setError] = useState(null);
    const { progress, url } = useStorage(file);

                urlSetter(url)


    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);

            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        }
    };


    return (
        <>
            <label>
                <input type="file" onChange={handleChange} />
                {file && <p>{progress}% uploaded</p>}
            </label>
            {error && <p>{error}</p>}
            <br />
            {file && url && <img src={url}></img>}
        </>
    );
}

