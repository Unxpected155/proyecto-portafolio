import DownloadFileButton from "@/components/DownloadFileButton";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-wrap">
      <div className="flex flex-col items-center gap-4 text-center font-title text-white">
        <p className="text-2xl font-bold md:text-5xl">Hello 👋 , I'm</p>
        <p className="text-5xl font-bold text-secondary-color md:text-8xl">
          Gabriel Porras
        </p>
        <p className="text-xl font-bold md:text-3xl">
          Not a robot.. a Full-Stack Software Engineer
        </p>
        <div className="flex flex-col gap-4">
          <DownloadFileButton
            className="mt-6 w-40 items-center rounded-3xl bg-secondary-color p-2 text-xl font-bold text-black md:h-20 md:w-60"
            fileRef={"CV Tarea 3 Ingles.pdf"}
            nameDownload={"Gabriel's CV"}
          >
            My CV
          </DownloadFileButton>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="www.linkedin.com/in/gabriel-porras-brenes"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex justify-center rounded-full bg-secondary-color px-4 py-2 hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-secondary-color"
            >
              <Linkedin className="size-8 md:size-10" color="black" />
            </motion.a>
            <motion.a
              href="https://github.com/Unxpected155/GPorras"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex justify-center rounded-full bg-secondary-color px-4 py-2 hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-secondary-color"
            >
              <Github className="size-8 md:size-10" color="black" />
            </motion.a>
          </div>
        </div>
      </div>
      <Logo
        className="mt-2 rounded-full bg-terciary-color"
        imagePath={"src/assets/ImagenPortrait.webp"}
        description="Photo of Gabriel"
      />
    </div>
  );
};

export default AboutMe;
