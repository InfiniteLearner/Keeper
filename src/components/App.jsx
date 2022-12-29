import Header from './Header' ;
import Footer from './Footer' ;
import Note from './Note' ;
import CreateArea from './CreateArea';
import React from "react" ;


function App() {
  const [notes, setNotes] = React.useState([]);

  function updateNotes(note){
    setNotes((previous) => {
      note = {...note, key : previous.length+1};
      console.log(note);
      return [...previous,note];
    });
  }

  function deleteNote(id){
    setNotes((previous) => {
      const newNotes =  previous.filter((val, index) => {
        return val.key !== id ;
      });

      return newNotes ;
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={updateNotes}/>
      {notes.map((note) => {
        return(
          <Note key={note.key} id={note.key} title={note.title} content={note.content} onClick={deleteNote}/>
        );
        })
      }
      <Footer />
    </div>
  );
}

export default App;
