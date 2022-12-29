import React from "react";

function CreateArea(props) {

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function updateTitle(event){
    const value = event.target.value ;

    setTitle(value);
  }

  function updateContent(event){
    const value = event.target.value ;

    setContent(value);
  }

  return (
    <div>
      <form onSubmit={(event) => 
       {
        const note = {
          title: title,
          content : content
        };

        setTitle("");
        setContent("");

        props.onAdd(note);
        event.preventDefault();
       }
      }>
        <input onChange={updateTitle} name="title" placeholder="Title" value={title}/>
        <textarea onChange={updateContent} name="content" placeholder="Take a note..." rows="3" value={content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
