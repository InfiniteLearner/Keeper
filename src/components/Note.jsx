import React from "react" ;

const title = "This is the note title" ;
const content = "This is the note content" ;

function Note(){
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note ;
