import React from "react";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
    // It allows us to animate the children of the container
    // Hidden is for the initial state of the container
    // Visible is for the final state of the container
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
        },
    };

    return (
        <motion.section
            id="about-me"
            className="about-me-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className="about-me-content" variants={containerVariants}>
                <AboutMeCard>
                    <Trans i18nKey="aboutMe.card1">
                        Étant originaire de France, j’ai déménagé au Canada il y a maintenant <strong>5 ans</strong> et
                        j'y suis aujourd'hui <strong> résident permanent </strong>. Durant cette période, j’ai eu
                        l’opportunité de découvrir une nouvelle culture et de développer des compétences professionnelles
                        enrichissantes!
                    </Trans>
                </AboutMeCard>
                <AboutMeCard>
                    <Trans i18nKey="aboutMe.card2">
                        🎯 Au cours de mon parcours, j’ai travaillé sur des projets diversifiés, allant du <strong>développement d'applications et de sites webs</strong> à la <strong>robotique</strong>, en passant par le <strong>machine learning</strong>. Cela m'a appris à relever des défis techniques tout en créant des solutions pratiques pour les utilisateurs.
                    </Trans>
                </AboutMeCard>
            </motion.div>
        </motion.section>
    );
};

const AboutMeCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            className="about-me-card"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
        >
            <p>{children}</p>
        </motion.div>
    );
};

export default AboutMe;
