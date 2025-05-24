import { Request, Response } from "express";
import Task from "../models/Task";
import Project from "../models/Project";

export class TaskController {
    static async createTask(req: Request, res: Response) {
        const task = new Task(req.body);
        task.project = req.project.id;
        await task.save();

        req.project.tasks.push(task.id);
        await req.project.save();

        res.status(201).json(task);
    }

    static async getTasks(req: Request, res: Response) {
        const { projectId } = req.params;
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
    }
}

export default TaskController;
