import React from 'react';
import { notesSelectors, deleteNote } from '../redux/noteSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function NotesList() {
    const notes = useSelector(notesSelectors.selectAll);
    const dispatch = useDispatch();
    return (
        <div className="row row-cols-2 row-cols-md-3 g-2 mb-5">
            {notes.map((note) => (
                <div key={note.id} className="col">
                    <div className={`card text-bg-${note.noteColor} mb-3`} style={{ maxWidth: "18rem", height:"12rem" }}>
                        <div className="card-header">{note.title.slice(0, 10)}</div>

                        <div className="card-body">
                            <p className="card-text">{note.text.slice(0, 30)}...</p>
                        </div><hr />
                        <div>
                            <Link to={`/detail/${note.id}`}><button style={{width:"50%", color:"black"}} className="btn">detail</button></Link>
                            <Link><button style={{width:"50%", color:"black"}} onClick={() => dispatch(deleteNote(note.id))} className="btn">Delete</button></Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default NotesList;
