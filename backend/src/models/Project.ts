import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    projectName: string;
    clientName: string;
    description: string;
}

const ProjectSchema: Schema = new Schema({
    projectName: { type: String, trim: true, required: true },
    clientName: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
});

const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
