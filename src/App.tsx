import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FloatingNav from "./components/FloatingNav/FloatingNav.tsx";
import Home from "./components/Home/Home.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import SkillsComponent from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import NeurosimulationProject from "./pages/NeurosimulationProject.tsx";
import Interests from "./components/Interest/Interest.tsx";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";
// import Background from "./components/Background/Background-old-old.tsx";

const App: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = async (lang: string) => {
        try {
            await i18n.changeLanguage(lang);
            console.log(`Language switched to: ${lang}`);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    const [headerColor, setHeaderColor] = useState("white");
    const location = useLocation();

    const handleScroll = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            const rect = homeSection.getBoundingClientRect();
            if (rect.bottom > 0) {
                setHeaderColor("white");
            } else {
                setHeaderColor("black");
            }
        }
    };

    useEffect(() => {
        if (location.pathname === "/") {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [location.pathname]);

    const showLanguageSwitcher = location.pathname !== "/neurosimulation-project";

    return (
        <div>
            {location.pathname !== "/neurosimulation-project" && (
                <header style={{ color: headerColor }}>
                    David de Blas
                </header>
            )}

            {showLanguageSwitcher && (
                <div className="language-switcher">
                    <button
                        onClick={() => changeLanguage("fr")}
                        className={i18n.language === "fr" ? "active" : ""}
                    >
                        Français
                    </button>
                    <button
                        onClick={() => changeLanguage("en")}
                        className={i18n.language === "en" ? "active" : ""}
                    >
                        English
                    </button>
                </div>
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home/>
                            <AboutMe/>

                            <div className="features-section">
                                <div className="features-card">
                                    <SkillsComponent/>
                                    <Projects/>
                                    <Interests/>
                                </div>
                            </div>

                        </>
                    }
                />
                <Route
                    path="/neurosimulation-project"
                    element={<NeurosimulationProject/>}
                />
            </Routes>

            {location.pathname !== "/neurosimulation-project" && <FloatingNav />}
        </div>
    );
};

export default App;
