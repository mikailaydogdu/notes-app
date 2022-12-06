import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { notesSelectors, deleteNote } from '../redux/noteSlice';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function DetailNote() {
  const { id } = useParams();
  const note = useSelector((state) => notesSelectors.selectById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="m-3" style={{padding:"20px"}}>
      <div key={note.id}>
        <div className={`card text-bg-${note.noteColor} mb-3`} style={{ maxWidth: "100%"}}>
          <div className="card-header">{note.title}</div>
          <div className="card-body" style={{minHeight:"300px"}}>
            <p className="card-text">{note.text}</p>
          </div>
          <hr />
          <div>
            <button onClick={() => dispatch(deleteNote(note.id, navigate('/')))} className="btn btn-danger">Delete</button>
            <Link to={`/edit/${note.id}`}> <button className="btn btn-success">Edit</button></Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DetailNote;
