import { Project } from "../../../interface/Project";
import images from "../../../assets/imageImports";
import { Icons } from "../../../utils/icons";
import { useTranslation } from "react-i18next";

export const projectsData = (): Project[] => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();

    return [
        {
            id: 1,
            image: images.projects.project1.thumbnail,
            title: t("projects.project1.title"),
            description: t("projects.project1.description"),
            detailedDescription: t("projects.project1.detailedDescription"),
            link: "/neurosimulation-project",
            targetBlank: false,
            modalImage: images.projects.neurosimulationProject.mainScreen3,
            technologies: [
                { icon: <Icons.Python />, label: "Python" },
                { icon: <Icons.React />, label: "React Native" },
                { icon: <Icons.Kotlin />, label: "Kotlin" },
                { icon: <Icons.FastAPI />, label: "FastAPI" },
            ],
        },
        {
            id: 2,
            image: images.projects.project2.thumbnail,
            title: t("projects.project2.title"),
            description: t("projects.project2.description"),
            detailedDescription: t("projects.project2.detailedDescription"),
            link: "https://subscription-manager-ten.vercel.app/",
            targetBlank: true,
            modalImage: images.projects.project2.thumbnail,
            technologies: [
                { icon: <Icons.Java />, label: "Java" },
                { icon: <Icons.SpringBoot />, label: "SpringBoot" },
                { icon: <Icons.React />, label: "React" },
            ],
        },
        {
            id: 3,
            image: images.projects.project3.thumbnail,
            title: t("projects.project3.title"),
            description: t("projects.project3.description"),
            detailedDescription: t("projects.project3.detailedDescription"),
            link: "https://github.com/daviddeblas/portfolio",
            targetBlank: true,
            modalImage: images.projects.project3.thumbnail,
            technologies: [
                { icon: <Icons.React />, label: "React" },
                { icon: <Icons.TypeScript />, label: "TypeScript" },
            ],
        },
        {
            id: 4,
            image: images.projects.project4.thumbnail,
            title: t("projects.project4.title"),
            description: t("projects.project4.description"),
            detailedDescription: t("projects.project4.detailedDescription"),
            link: "https://github.com/daviddeblas/database-comparator",
            targetBlank: true,
            modalImage: images.projects.project4.thumbnail,
            technologies: [
                { icon: <Icons.Docker />, label: "Docker" },
                { icon: <Icons.Python />, label: "Python" },
                { icon: <Icons.MongoDB />, label: "MongoDB" },
                { icon: <Icons.Redis />, label: "Redis" },
                { icon: <Icons.Bash />, label: "Bash" },
            ],
        },
        {
            id: 5,
            image: images.projects.project5.thumbnail,
            title: t("projects.project5.title"),
            description: t("projects.project5.description"),
            detailedDescription: t("projects.project5.detailedDescription"),
            link: "https://github.com/daviddeblas/road-accident-prediction-qc",
            targetBlank: true,
            modalImage: images.projects.project5.thumbnail,
            technologies: [
                { icon: <Icons.Python />, label: "Python" },
                { icon: <Icons.Pandas />, label: "Pandas" },
                { icon: <Icons.SkLearn />, label: "Scikit-Learn" },
                { icon: <Icons.Matplotlib />, label: "Matplotlib" },
            ],
        },


    ];
};
