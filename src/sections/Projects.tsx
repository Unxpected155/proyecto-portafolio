import { motion } from "framer-motion";
import React from "react";
import { Code, Eye } from "lucide-react";

const projects = [
  {
    title: "Gamehub",
    description:
      "This website was developed using the React framework, Chakra UI for CSS styling, and TypeScript. It integrated an API called RAWG API, which provides a list of games along with their categories and scores. The application is capable of displaying a list of video games along with their ratings, which can be sorted by categories and filtered by platform, genre, relevance, popularity, name, day added, and publication date. This page was deployed on Vercel.",
    repository: "https://github.com/Unxpected155/gameHub",
    deployLink: "",
    image: `src/assets/projects/Gamehub.webp`,
  },
  {
    title: "QuitSmoke",
    description:
      "This project was created to help people quit smoking. The web application was developed using Spring Boot, Spring Security, AWS EC2, HTML/CSS, Angular, Netlify, C++, JWT Authentication, and Zapier. It features a user authentication system using Spring Security and JWT Authentication technologies. Additionally, it includes a chatbot that provides personalized advice related solely to quitting smoking. The integration of a wearable device programmed in C++ is also incorporated to monitor air quality and record related data.",
    repository: "https://github.com/Unxpected155/QuitSmoke-Backend",
    deployLink: "",
    image: "src/assets/projects/QuitSmoke.webp",
  },
  {
    title: "Todo List",
    description:
      "This project was created using TypeScript, SvelteKit, MongoDB, and HTML/CSS technologies and deployed on Firebase. The application allows users to create and manage tasks through a simple interface. Users must register through a backend API for user authentication, with each user being added to the database upon registration.",
    repository: "https://github.com/fbnmlns/proyecto-componentes",
    deployLink: "",
    image: "src/assets/projects/TodoList.webp",
  },
  {
    title: "Calculator",
    description:
      "A calculator was developed using HTML/CSS and JavaScript. It enables users to perform basic operations such as addition, subtraction, multiplication, and division, and it also accepts decimal numbers. The calculator features a simple and pleasant interface.",
    repository: "https://github.com/Unxpected155/calculator",
    deployLink: "",
    image: "src/assets/projects/Calculator.webp",
  },
  {
    title: "",
    description: "",
    repository: "",
    deployLink: "",
    image: "src/assets/sapitoIcon.png",
  },
];

const Projects = () => {
  return (
    <div className="container flex flex-wrap justify-between gap-y-16 ">
      {projects.map((project, index) => {
        return (
          <div
            className={`flex h-full w-full flex-col justify-between gap-10 rounded-lg bg-primary-color/85 p-5  ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-col md:flex-row"}`}
            key={project.title}
          >
            <img
              src={project.image}
              className="h-64 w-full rounded-lg md:h-96 md:max-w-[35rem]"
            />
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-center text-5xl font-bold text-terciary-color md:text-7xl">
                {project.title}
              </p>
              <p className={`text-2xl text-[#f3f3f3]`}>{project.description}</p>
              <div className="flex justify-center gap-16">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={project.repository}
                  target="_blank"
                  className="flex w-28 justify-center rounded-3xl bg-secondary-color p-4 text-center font-semibold hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-secondary-color md:w-32"
                >
                  <Code />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href=""
                  className="flex w-28 justify-center rounded-3xl bg-secondary-color p-4 text-center font-semibold hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-secondary-color md:w-32"
                >
                  <Eye />
                </motion.a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
