import Header from './Header' ;
import Footer from './Footer' ;
import Note from './Note' ;
import notes from '../notes' ;

function createNote(note){
  return(
    <Note key={note.key} title={note.title} content={note.content} />
  );
}

console.log(notes);

var arr = [1,2,3];

console.log(arr);


function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
