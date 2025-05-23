import mongoose, { Schema, Document, PopulatedDoc, Types } from "mongoose";
import { ITask } from "./Task";

export interface IProject extends Document {
    projectName: string;
    clientName: string;
    description: string;
    tasks: PopulatedDoc<ITask & Document>[];
}

const ProjectSchema: Schema = new Schema(
    {
        projectName: { type: String, trim: true, required: true },
        clientName: { type: String, trim: true, required: true },
        description: { type: String, trim: true, required: true },
        tasks: [{ type: Types.ObjectId, ref: "Task", required: true }],
    },
    { timestamps: true }
);

const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
