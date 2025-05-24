import type { Request, Response, NextFunction } from "express";
import Project, { IProject } from "../models/Project";

declare global {
    namespace Express {
        interface Request {
            project: IProject;
        }
    }
}

export async function validateProjectExists(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { projectId } = req.params;
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({ error: "Project not found" });
            return;
        }
        req.project = project;
        next();
    } catch (error) {
        res.status(500).json({ message: "Error checking project existence" });
    }
}
