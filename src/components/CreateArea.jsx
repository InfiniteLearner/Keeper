import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab" ;
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [expend, setExpend] = React.useState(false);

  function updateTitle(event){
    const value = event.target.value ;

    setTitle(value);
  }

  function updateContent(event){
    const value = event.target.value ;

    setContent(value);
  }

  function updateExpend(){
    setExpend(true);
  }

  function addNote(){
    const note = {
      title: title,
      content : content
    };

    setTitle("");
    setContent("");

    props.onAdd(note);
  }

  return (
    <div>
      <form className="create-note">
        {expend && <input onChange={updateTitle} name="title" placeholder="Title" value={title}/>}
        <textarea 
          onClick={updateExpend}
          onChange={updateContent} 
          name="content" 
          placeholder="Take a note..." 
          rows={expend ? "3" : "1"} 
          value={content}
        />
        <Zoom in={expend}>
          <Fab>
            <AddIcon onClick={addNote}/>
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
