import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircleMore } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between gap-6 border-t border-gray-200 bg-white px-10 py-6 shadow-md">
      <div className="flex items-center gap-6">
        <img
          src="/logo_porras_azul.webp"
          alt="Developer's logo"
          className="size-16 transform transition duration-300 hover:scale-150 md:size-24"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-10 md:text-xl">
        <p className="font-body font-semibold opacity-85">{t("occupation")}</p>
        <p className="font-body font-semibold opacity-85">
          Gabriel Porras Brenes
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
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
        <motion.a
          href="https://wa.me/50672052488"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex justify-center rounded-full bg-secondary-color px-4 py-2 hover:bg-opacity-85 focus:outline-none focus:ring focus:ring-secondary-color"
        >
          <MessageCircleMore className="size-8 md:size-10" color="black" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
