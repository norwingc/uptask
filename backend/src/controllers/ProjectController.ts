import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {
    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find().populate("tasks");
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

    static getProjectById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const project = await Project.findById(id).populate("tasks");
        if (!project) {
            res.status(404).json({ error: "Project not found" });
            return;
        }
        res.status(200).json(project);
    };

    static updateProject = async (req: Request, res: Response) => {
        const { id } = req.params;
        const project = await Project.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!project) {
            res.status(404).json({ error: "Project not found" });
            return;
        }
        await project.save();
        res.status(200).json(project);
    };

    static deleteProject = async (req: Request, res: Response) => {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (!project) {
            res.status(404).json({ error: "Project not found" });
            return;
        }
        await project.deleteOne();
        res.status(200).json({ message: "Project deleted successfully" });
    };
}
