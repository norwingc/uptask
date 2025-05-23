import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {
    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static createProject = async (req: Request, res: Response) => {
        const project = new Project(req.body);
        try {
            await project.save();
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}
