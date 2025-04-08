import React from "react";
import { Project } from "../../../interface/Project.ts";
import AnimatedButton from "../../AnimatedButton/AnimatedButton.tsx";
import { Trans, useTranslation } from "react-i18next";
import "./Modal.css";

interface ModalProps {
    project: Project;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
    const { t } = useTranslation();

    const handleButtonClick = () => {
        if (project.targetBlank) {
            window.open(project.link, "_blank", "noopener,noreferrer"); // open a new tab
        } else {
            window.location.href = project.link; // Redirects in the same tab
        }
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <img
                    src={project.modalImage}
                    alt={`Capture of ${project.title}`}
                    className="modal-image"
                />
                <div className="modal-description">
                    <Trans i18nKey={`projects.project${project.id}.detailedDescription`} components={{ strong: <strong /> }} />
                </div>
                {project.link && (
                    <AnimatedButton
                        label={t("modal.buttonDesc")}
                        onClick={handleButtonClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Modal;