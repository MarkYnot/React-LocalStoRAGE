import {useEffect, useState} from 'react';
import '../css/Note.css';
import CreateNote from './CreateNote'
import Note from './Note';
import {} from 'uuid'

const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [inputText, setInputText] = useState('')
  const textHandler = (e) =>{
     setInputText(e.target.value)
  }

  //add new note to the notes state
  const saveHandler = ()=>{
    setNotes((prevState)=>[
      ...prevState,
    {
      id: uuid(),
      text: inputText
    }
  ])

  setInputText('')
  }

  useEffect(()=>{
     const data = JSON.parse(localStorage.getItem('Notes'));
     if(Array.isArray(data) && data.length>0){
       setNotes(data)
     }
     setLoading(false);
  }, [])

  useEffect(()=>{
    if(!loading){
    console.log('notes', note)
    localStorage.setItem('Notes'. JSON.stringify(notes))
    }
  }, [notes, loading])


  if(loading){
    return <div>loading...</div>
  }

    return (
          <div className="notes">
             <Note />
             <CreateNode />
          </div>


    )

}

export default Notes;