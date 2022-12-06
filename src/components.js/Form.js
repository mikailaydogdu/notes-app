import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotes } from '../redux/noteSlice';
import { nanoid } from '@reduxjs/toolkit';

function FormNotes() {
  const [text, setText] = useState("");
  const [noteColor, setNotesColor] = useState("primary");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !title) return false;
    dispatch(addNotes({ id: nanoid(), text, noteColor, title }));

    setText("");
    setTitle("");
  }
  return (
    <div className='container mt-3'>
      <form onSubmit={handleSubmit}>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <div>
            <input className="form-control me-4 mb-3" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="note title" aria-label="title" />

            <input value="primary" onChange={(e) => setNotesColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="primary-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="primary-outlined">Blue</label>

            <input value="warning" onChange={(e) => setNotesColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="warning-outlined" autoComplete="off" />
            <label className="btn btn-outline-warning" htmlFor="warning-outlined">yellow</label>

            <input value="dark" onChange={(e) => setNotesColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="dark-outlined" autoComplete="off" />
            <label className="btn btn-outline-dark" htmlFor="dark-outlined">black</label>

            <input value="danger" onChange={(e) => setNotesColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined">red</label>

            <input value="success" onChange={(e) => setNotesColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" />
            <label className="btn btn-outline-success" htmlFor="success-outlined">green</label>



          </div>
        </div>

        <div className="form-floating  m-3">
          <textarea style={{minHeight:"200px"}} value={text} onChange={(e) => setText(e.target.value)} className="form-control p-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Note</label><br />
          <button onClick={() => handleSubmit()} className="btn btn-outline-success" type="submit">Add Notes</button>
        </div>


      </form>


    </div>
  )
}

export default FormNotes;
