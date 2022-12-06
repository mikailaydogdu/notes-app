import React from 'react';
import FormNotes  from '../components.js/Form';
import  NotesList from '../components.js/NotesList';

function Home() {

  return (
    <div className='container'> 
      <FormNotes />
      <NotesList />
    </div>
  )
}

export default Home;
