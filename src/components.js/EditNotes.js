import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { notesSelectors, editNote } from '../redux/noteSlice';
import { useNavigate } from "react-router-dom";

function EditNotes() {
  const { id } = useParams();
  const note = useSelector((state) => notesSelectors.selectById(state, id));
  const [text, setText] = useState(note.text);
  const [title, setTitle] = useState(note.title);
  const [noteColor, setNoteColor] = useState(note.noteColor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !title) return false;
    dispatch(editNote({
      id: note.id,
      changes: {
        text,
        title,
        noteColor,
      }
    }));

    setText("");
    setTitle("");
    setNoteColor("");
    navigate(`/detail/${note.id}`);

  }
  return (
    <div className='container mt-5'>
    <form onSubmit={handleSubmit}>
      <div className="btn-group mt-3" role="group" aria-label="Basic mixed styles example">
      <div>
            <input className="form-control me-4 mb-3" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="note title" aria-label="title" />

            <input value="primary" onChange={(e) => setNoteColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="primary-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary " htmlFor="primary-outlined">Blue</label>

            <input value="warning" onChange={(e) => setNoteColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="warning-outlined" autoComplete="off" />
            <label className="btn btn-outline-warning " htmlFor="warning-outlined">yellow</label>

            <input value="dark" onChange={(e) => setNoteColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="dark-outlined" autoComplete="off" />
            <label className="btn btn-outline-dark " htmlFor="dark-outlined">black</label>

            <input value="danger" onChange={(e) => setNoteColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
            <label className="btn btn-outline-danger " htmlFor="danger-outlined">red</label>

            <input value="success" onChange={(e) => setNoteColor(e.target.value)} type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" />
            <label className="btn btn-outline-success " htmlFor="success-outlined">green</label>

          </div>
      </div>
      <div className="form-floating m-3">
        <textarea style={{minHeight:"200px"}} value={text} onChange={(e) => setText(e.target.value)} className="form-control p-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Note</label><br />
        <button onClick={() => handleSubmit()} className="btn btn-outline-success" type="submit">Edit Notes</button>
      </div>
    </form>
    </div>
  )
}

export default EditNotes;
