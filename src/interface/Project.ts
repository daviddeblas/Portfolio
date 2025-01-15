import { Technology } from "./Technology";

export interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    detailedDescription?: string;
    link: string;
    targetBlank: boolean;
    modalImage?: string;
    technologies?: Technology[];
}
