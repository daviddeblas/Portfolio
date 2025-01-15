import React from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import "./Interests.css";

const Interests: React.FC = () => {
    const { t } = useTranslation();

    const interests = [
        {
            title: t("interests.travel.title"),
            description: t("interests.travel.description"),
        },
        {
            title: t("interests.sports.title"),
            description: t("interests.sports.description"),
        },
        {
            title: t("interests.cinema.title"),
            description: t("interests.cinema.description"),
        },
        {
            title: t("interests.gaming.title"),
            description: t("interests.gaming.description"),
        },
    ];

    return (
        <motion.section
            id="interests"
            className="interests-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="interests-title">{t("interests.title")}</h2>
            <div className="interests-layout">
                {interests.map((interest, index) => (
                    <motion.div
                        key={index}
                        className="interest-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3>{interest.title}</h3>
                        <p>
                            <Trans i18nKey={interest.description} />
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Interests;
