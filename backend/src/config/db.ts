import mongoose from "mongoose";
import colors from "colors";
import { exit } from "node:process";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DATABASE_URL);
        console.log(
            colors.magenta.bold(
                `MongoDB connected: ${connection.host}:${connection.port}`
            )
        );
    } catch (error) {
        console.log(colors.red.bold(error.message));
        exit(1);
    }
};
