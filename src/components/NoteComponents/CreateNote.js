const CreateNote=()=>{
  const charLimit = 100
  const charLeft = 100;
  return (
  <div className='note'>
  <textarea
  cols='10'
  rows='5'
  value=""
  placeholder='Typе...'
  onChange=''
  maxLength={charLimit}
  ></textarea>
  
  <div className='note__footer'>
  <span className='label'>{charLeft} left</span> <button className='note__save'>save</button> 
  </div>

  <LinearProgress 
  className='char__progress'
  variant='determinate'
  value={charLeft}
  />
  </div>
  )
}

export default CreateNote;