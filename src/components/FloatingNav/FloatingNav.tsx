import React, { useState } from "react";
import { Icons } from "../../utils/icons";
import { useTranslation } from "react-i18next";

const FloatingNav: React.FC = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState<string | null>(null);

    const handleNavigation = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setMessage(t("floatingNav.emailCopied"));
        setTimeout(() => setMessage(null), 2000);
    };

    const navItems = [
        { id: "home", label: t("floatingNav.home"), icon: <Icons.Home /> },
        { id: "skills", label: t("floatingNav.skills"), icon: <Icons.Tools /> },
        { id: "projects", label: t("floatingNav.projects"), icon: <Icons.Tasks /> },
        { id: "interests", label: t("floatingNav.interests"), icon: <Icons.Map /> },
        {
            id: "email",
            label: "Email",
            icon: <Icons.Envelope />,
            action: () => handleCopyToClipboard("daviddeblas@protonmail.com"),
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            icon: <Icons.LinkedIn />,
            action: () => window.open("https://ca.linkedin.com/in/david-de-blas-1166a3229/", "_blank"),
        },
        {
            id: "github",
            label: "GitHub",
            icon: <Icons.GitHub />,
            action: () => window.open("https://github.com/daviddeblas", "_blank"),
        },
    ];

    return (
        <div>
            {/* Temporary message for copied email */}
            {message && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(0, 0, 0, 0.8)",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        zIndex: 1001,
                        fontSize: "14px",
                    }}
                >
                    {message}
                </div>
            )}

            {/* Floating Navbar */}
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "15px",
                    background: "rgba(0, 0, 0, 0.8)",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    zIndex: 1000,
                }}
            >
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: "relative",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "#333",
                            color: "#fff",
                            transition: "transform 0.3s ease",
                        }}
                        onClick={() => {
                            if (item.action) {
                                item.action();
                            } else {
                                handleNavigation(item.id);
                            }
                        }}
                        onMouseOver={(e) => {
                            const tooltip = document.createElement("div");
                            tooltip.innerText = item.label;
                            tooltip.style.position = "absolute";
                            tooltip.style.top = "-35px";
                            tooltip.style.padding = "5px 10px";
                            tooltip.style.backgroundColor = "#000";
                            tooltip.style.color = "#fff";
                            tooltip.style.borderRadius = "5px";
                            tooltip.style.whiteSpace = "nowrap";
                            tooltip.style.fontSize = "12px";
                            tooltip.style.textAlign = "center";
                            e.currentTarget.appendChild(tooltip);
                        }}
                        onMouseOut={(e) => {
                            const tooltip = e.currentTarget.querySelector("div");
                            if (tooltip) {
                                e.currentTarget.removeChild(tooltip);
                            }
                        }}
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FloatingNav;
