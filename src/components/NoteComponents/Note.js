import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
const Note =({note,deleteNote})=>{
  return <div className="note">
      <h1 className="note__body">hello world</h1>
       <div className="note__footer"></div>
      <DeleteForeverIcon className='note__delete' aria-jidden='true' 
      // onClick={()=>deleteNote(note.id)}
      />
  </div>
}

export default Note;