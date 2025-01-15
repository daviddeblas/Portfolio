import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../utils/icons"; // Fichier centralisé pour les icônes
import { useTranslation } from "react-i18next";
import "./Skills.css";

const SkillIcon: React.FC<{ Icon: React.ElementType; name: string }> = ({ Icon, name }) => {

    return (
        <div className="skill-icon">
            <Icon className="icon" size={45} />
            <p>{name}</p>
        </div>
    );
};

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const skills = {
        [t("skills.categories.programmingLanguages")]: [
            { Icon: Icons.Java, name: "Java" },
            { Icon: Icons.Python, name: "Python" },
            { Icon: Icons.TypeScript, name: "TypeScript" },
            { Icon: Icons.JavaScript, name: "JavaScript" },
            { Icon: Icons.SQL, name: "SQL" },
        ],
        [t("skills.categories.webAndAIFrameworks")]: [
            { Icon: Icons.React, name: "React" },
            { Icon: Icons.Angular, name: "Angular" },
            { Icon: Icons.SpringBoot, name: "Spring Boot" },
            { Icon: Icons.TensorFlow, name: "TensorFlow" },
            { Icon: Icons.ScikitLearn, name: "Scikit-Learn" },
        ],
        [t("skills.categories.databases")]: [
            { Icon: Icons.PostgreSQL, name: "PostgreSQL" },
            { Icon: Icons.MongoDB, name: "MongoDB" },
        ],
        [t("skills.categories.toolsAndTechnologies")]: [
            { Icon: Icons.Docker, name: "Docker" },
            { Icon: Icons.AWS, name: "AWS" },
            { Icon: Icons.Git, name: "Git" },
        ],
    };

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h1 className="skills-title">
                {t("skills.title")}
            </h1>
            <div className="skills-image-background"></div>
            {Object.entries(skills).map(([category, items]) => (
                <motion.div
                    key={category}
                    className="skills-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2>{category}</h2>
                    <div className="skills-icons">
                        {items.map(({ Icon, name }) => (
                            <SkillIcon key={name} Icon={Icon} name={name} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
};

export default Skills;
