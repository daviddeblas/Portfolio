import React from "react";
import Wave from "./Wave/Wave";
import { Trans } from "react-i18next";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <section id="home" className="header">
            <div className="inner-header flex">
                <h1>
                    <Trans i18nKey="home.welcome">Bienvenue !</Trans>
                </h1>
                <p style={{ maxWidth: "613px", margin: "10px auto", lineHeight: "1.6" }}>
                    <Trans i18nKey="home.description">
                        Récemment diplômé en <strong>génie informatique</strong> à Polytechnique Montréal, je suis passionné par le <strong>développement backend</strong> en utilisant des langages comme <strong>Java</strong> et <strong>Python</strong> !
                    </Trans>
                </p>
            </div>
            <Wave />
        </section>
    );
};

export default Home;
