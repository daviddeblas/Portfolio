// Importing icons from React Icons
import {
    FaPython,
    FaJava,
    FaReact,
    FaAngular,
    FaDocker,
    FaAws,
    FaGit,
    FaMap,
    FaTerminal,
    FaChartBar,
    FaAndroid
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
    SiPostgresql,
    SiMongodb,
    SiTensorflow,
    SiScikitlearn,
    SiSpringboot,
    SiTypescript,
    SiFastapi,
    SiKotlin,
    SiRedis, SiPandas
} from "react-icons/si";
import { FaHome, FaTasks, FaTools, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";


export const Icons = {
    // Programming language
    Java: FaJava,
    Python: FaPython,
    TypeScript: SiTypescript,
    JavaScript: DiJavascript1,
    SQL: BsFiletypeSql,

    // Web and IA
    React: FaReact,
    Angular: FaAngular,
    SpringBoot: SiSpringboot,
    TensorFlow: SiTensorflow,
    ScikitLearn: SiScikitlearn,
    FastAPI: SiFastapi,
    Kotlin: SiKotlin,
    Matplotlib: FaChartBar,
    Pandas: SiPandas,
    SkLearn: SiScikitlearn,


    // Databases
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Redis:  SiRedis,

    // Tools and technologies
    Docker: FaDocker,
    AWS: FaAws,
    Git: FaGit,
    Bash: FaTerminal,
    Android: FaAndroid,

    // Navbar icons
    Home: FaHome,
    Tasks: FaTasks,
    Tools: FaTools,
    Envelope: FaEnvelope,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Map: FaMap,
};
