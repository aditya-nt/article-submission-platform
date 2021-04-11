import React from 'react'

export default function CreateEditArticle() {
    return (
        <div>
         

            <h4>TITLE</h4>
            <input placeholder="Title"></input>
            <h4>DESCRIPTION</h4>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
            </textarea>

            <br/>
            <button>Upload Image</button>
            <text>C://Path</text>
            <br/>

            <img src='../../' width="380px" height="480px"></img>

        </div>
    )
}
