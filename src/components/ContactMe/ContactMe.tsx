import React from "react";

const ContactMe: React.FC = () => {
    return (
        <section
            id="availability"
            style={{
                height: "100vh",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            <h1>Disponibilité</h1>
            <p>Je suis disponible pour des rendez-vous à distance aux horaires suivants :</p>
            <ul>
                <li>Lundi : 10h - 16h</li>
                <li>Mardi : 10h - 16h</li>
                <li>Mercredi : 10h - 16h</li>
                <li>Jeudi : 10h - 16h</li>
                <li>Mettre carte Montréal</li>
            </ul>
        </section>
    );
};

export default ContactMe;
