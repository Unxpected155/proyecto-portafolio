import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "es",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello 👋 , I'm",
          aboutMe:
            "Software engineer specialized in Full-Stack development, with experience in HTML/CSS, Node.js, Java, C++, C#, React, Angular, SvelteKit, TypeScript, and proficiency in both relational and non-relational databases",
          cv: "My CV",
          nav: {
            aboutMe: "About Me",
            projects: "Projects",
            technologies: "Technologies",
            contactMe: "Contact Me",
          },
          repository: "Repository",
          projectDescriptions: {
            gamehub:
              "This website integrates the RAWG API to provide a list of games with categories and scores. Deployed on Vercel.",
            quitsmoke:
              "A web app to help people quit smoking, featuring Spring Boot, Spring Security, Angular, and more. Includes a chatbot and wearable device integration.",
            todolist:
              "A task management app built with TypeScript, SvelteKit, and MongoDB. Deployed on Firebase.",
            calculator:
              "A simple calculator developed using HTML/CSS and JavaScript, supporting basic operations and decimal numbers.",
            tictactoe:
              "This project implements the Minimax AI algorithm for Tic-Tac-Toe, allowing for strategic gameplay against an AI opponent.",
          },
          showMore: "Show more",
          showLess: "Show less",
          contactMessage:
            "I will be more than happy to hear from you! If you have any questions, suggestions, or just want to say hello, don't hesitate to contact me through this form or send me an email.",
          contactNameLabel: "Name",
          contactEmailLabel: "Email",
          contactMessageLabel: "Message",
          sendLabel: "Send",
          occupation: "Full-Stack Software Developer",
        },
      },
      es: {
        translation: {
          greeting: "Hola 👋 , soy",
          aboutMe:
            "Ingeniero de software especializado en desarrollo Full-Stack, con experiencia en HTML/CSS, Node.js, Java, C++, C#, React, Angular, SvelteKit, TypeScript y dominio de bases de datos tanto relacionales como no relacionales.",
          cv: "Curriculum ",
          nav: {
            aboutMe: "Sobre mí",
            projects: "Proyectos",
            technologies: "Tecnologías",
            contactMe: "Contáctame",
          },
          repository: "Repositorio",
          projectDescriptions: {
            gamehub:
              "Este sitio web integra la API de RAWG para proporcionar una lista de juegos con categorías y puntuaciones. Desplegado en Vercel.",
            quitsmoke:
              "Una aplicación web para ayudar a las personas a dejar de fumar, con Spring Boot, Spring Security, Angular y más. Incluye un chatbot e integración de dispositivos ponibles.",
            todolist:
              "Una aplicación de gestión de tareas construida con TypeScript, SvelteKit y MongoDB. Desplegada en Firebase.",
            calculator:
              "Una calculadora simple desarrollada con HTML/CSS y JavaScript, que soporta operaciones básicas y números decimales.",
            tictactoe:
              "Este proyecto implementa el algoritmo de inteligencia artificial Minimax para el juego de Gato, permitiendo un juego estratégico contra un oponente controlado por la computadora.",
          },
          showMore: "Mostrar más",
          showLess: "Mostrar menos",
          contactMessage:
            "Estaré más que feliz de saber de ti. Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en contactarme a través de este formulario o enviarme un correo electrónico.",
          contactNameLabel: "Nombre",
          contactEmailLabel: "Correo electrónico",
          contactMessageLabel: "Mensaje",
          sendLabel: "Enviar",
          occupation: "Ingeniero de software Full-Stack",
        },
      },
    },

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
