import { Request, Response } from "express";
import Task from "../models/Task";
import Project from "../models/Project";

export class TaskController {
    static async createTask(req: Request, res: Response) {
        const { projectId } = req.params;
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }

        const task = new Task(req.body);
        task.project = project.id;
        await task.save();

        project.tasks.push(task.id);
        await project.save();
        
        res.status(201).json(task);
    }
}

export default TaskController;
