import { Request, Response } from "express";
import Task from "../models/Task";

export class TaskController {
    static async createTask(req: Request, res: Response) {
        const task = new Task(req.body);
        task.project = req.project.id;

        req.project.tasks.push(task.id);

        await Promise.all([task.save(), req.project.save()]);

        res.status(201).json(task);
    }

    static async getProjectTasks(req: Request, res: Response) {
        const tasks = await Task.find({ project: req.project.id }).populate(
            "project"
        );
        res.status(200).json(tasks);
    }

    static async getTaskById(req: Request, res: Response) {
        const task = await Task.findById(req.params.taskId).populate("project");
        if (!task) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        if (task.project.id !== req.project.id) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        res.status(200).json(task);
    }
}

export default TaskController;
