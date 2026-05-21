import mongoose from 'mongoose';

// 1 - create a schemma
// 2 - model based off the schema

const noteSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;