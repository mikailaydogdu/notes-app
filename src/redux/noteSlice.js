import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

export const notesAdaptor = createEntityAdapter();
const initialState = notesAdaptor.getInitialState();

export const  notesSelectors = notesAdaptor.getSelectors((state)  => state.notes);

const notesSlice= createSlice({
    name:"notes",
    initialState,
    reducers:{
        addNotes: notesAdaptor.addOne,
        deleteNote: notesAdaptor.removeOne,
        editNote: notesAdaptor.updateOne,
    },
})

export const {addNotes, deleteNote, editNote} = notesSlice.actions;
export default notesSlice.reducer;