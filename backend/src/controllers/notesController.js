import Note from '../../models/Note.js';

export async function getAllNotes(_, res) {
  try { 
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error });
  }
};

export async function getNoteById(req, res) { 
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId)
    res.status(200).json(note);
  } catch { 
    res.status(500).json({ message: "Error fetching note", error });
  }
}

export async function createNote(req, res) {

  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    await newNote.save();
    res.status(201).json({message: "Note created successfully", note: newNote });
  }
  catch (error) {
    res.status(500).json({ message: "Error creating note", error });
  }
};

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const noteId = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(noteId, { title: title, content: content }, { new: true });
    res.status(200).json({ message: "Note updated successfully", note: updatedNote });
  } catch {
    res.status(500).json({ message: "Error updating note", error });
  }
};

export async function deleteNote(req, res) {
  try {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);
    if(!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" })

  } catch { 
    res.status(500).json({ message: "Error deleting note", error });
  }
};