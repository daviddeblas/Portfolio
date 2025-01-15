import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal/Modal";
import { Project } from "../../interface/Project";
import { projectsData } from "./data/projectsData.tsx";
import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <motion.div
            className="projects-gallery"
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h1 className="projects-title">{t("projects.title")}</h1>
            <p className="projects-intro">{t("projects.intro")}</p>

            {projectsData().map((project, index) => (
                <motion.div
                    key={project.id}
                    className="project-card"
                    style={{ backgroundImage: `url(${project.image})` }}
                    onClick={() => openModal(project)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <div className="project-card__overlay">
                        <div className="project-card__text-wrapper">
                            <h2 className="project-card__title">{project.title}</h2>
                            <p className="project-card__desc">{project.description}</p>
                        </div>
                        <div className="project-card__icons">
                            {project.technologies?.map((tech, idx) => (
                                <span key={idx} className="project-card__icon">
                                    {tech.icon}
                                    <span className="tooltip">{tech.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}

            {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
        </motion.div>
    );
};

export default Projects;
