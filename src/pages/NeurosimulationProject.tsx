import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import images from "../assets/imageImports";
import "./NeurosimulationProject.css";
import Background from "../components/Background/Background.tsx";

const NeurosimulationProject = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/");
        setTimeout(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <div className="decorative-bg">
            <Background/>
            <div className="container">
                <h1 className="title">{t("neurosimulation.title")}</h1>

                <section className="section">
                    <h2 className="section-title">{t("neurosimulation.sections.presentation.title")}</h2>
                    <p className="section-content">{t("neurosimulation.sections.presentation.content")}</p>
                    <div className="gallery">
                        <img
                            src={images.projects.neurosimulationProject.systemOperation}
                            alt={t("neurosimulation.sections.presentation.title")}
                            className="gallery-image"
                        />
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">{t("neurosimulation.sections.technologies.title")}</h2>
                    <p className="section-content">{t("neurosimulation.sections.technologies.content")}</p>
                    <div className="gallery">
                        <img
                            src={images.projects.neurosimulationProject.systemDesign}
                            alt={t("neurosimulation.sections.technologies.title")}
                            className="gallery-image"
                        />
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">{t("neurosimulation.sections.features.title")}</h2>

                    <div className="section-group">
                        <h3 className="sub-section-title">{t("neurosimulation.sections.features.realtime.title")}</h3>
                        <p className="section-content">{t("neurosimulation.sections.features.realtime.content")}</p>
                        <div className="gallery">
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.mainScreen1}
                                    alt={t("neurosimulation.sections.features.realtime.captions.chart1")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.realtime.captions.chart1")}</p>
                            </div>
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.mainScreen2}
                                    alt={t("neurosimulation.sections.features.realtime.captions.heatmap")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.realtime.captions.heatmap")}</p>
                            </div>
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.mainScreen3}
                                    alt={t("neurosimulation.sections.features.realtime.captions.chart2")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.realtime.captions.chart2")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="section-group">
                        <h3 className="sub-section-title">{t("neurosimulation.sections.features.sessions.title")}</h3>
                        <p className="section-content">{t("neurosimulation.sections.features.sessions.content")}</p>
                        <div className="gallery">
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.sessionHistory}
                                    alt={t("neurosimulation.sections.features.sessions.captions.history")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.sessions.captions.history")}</p>
                            </div>
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.sessionSummary}
                                    alt={t("neurosimulation.sections.features.sessions.captions.summary")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.sessions.captions.summary")}</p>
                            </div>
                            <div className="gallery-item">
                                <img
                                    src={images.projects.neurosimulationProject.uploadingData}
                                    alt={t("neurosimulation.sections.features.sessions.captions.upload")}
                                    className="gallery-image"
                                />
                                <p className="gallery-caption">{t("neurosimulation.sections.features.sessions.captions.upload")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="button-container">
                    <AnimatedButton label={t("neurosimulation.sections.backToProjects")} onClick={goToProjects} />
                </div>
            </div>
        </div>
    );
};

export default NeurosimulationProject;
