import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  repository: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Gamehub",

    repository: "https://github.com/Unxpected155/gameHub",
    image: `/projects/Gamehub.webp`,
  },
  {
    title: "QuitSmoke",
    repository: "https://github.com/Unxpected155/QuitSmoke-Backend",
    image: "/projects/QuitSmoke.webp",
  },
  {
    title: "TodoList",
    repository: "https://github.com/fbnmlns/proyecto-componentes",
    image: "/projects/TodoList.webp",
  },
  {
    title: "Calculator",
    repository: "https://github.com/Unxpected155/calculator",
    image: "/projects/Calculator.webp",
  },
  {
    title: "TicTacToe",
    repository: "https://github.com/Cledersonbc/tic-tac-toe-minimax",
    image: "/projects/tictactoe.webp",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [showFullDescription, setShowFullDescription] = useState<boolean[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    // Llama a la función de manejo cuando el tamaño de la ventana cambia
    window.addEventListener("resize", handleResize);

    // Limpia el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDescription = (index: number) => {
    const newShowState = [...showFullDescription];
    newShowState[index] = !newShowState[index];
    setShowFullDescription(newShowState);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-title text-4xl font-bold text-black">
        {t("nav.projects")}
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-[13rem] md:max-w-lg "
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="max-h-[35rem] border-none bg-secondary-color">
                  <CardContent className="flex aspect-square items-center justify-center p-6 font-body ">
                    <div className="flex flex-col gap-4">
                      <img
                        src={project.image}
                        alt={project.title + " image"}
                        className="max-h-20 rounded-lg md:max-h-40"
                      />
                      <div className="flex flex-col gap-6">
                        <h2 className="font-title text-2xl font-semibold md:text-3xl">
                          {project.title}
                        </h2>
                        <p className="text-md md:text-lg">
                          {showFullDescription[index]
                            ? t(
                                `projectDescriptions.${project.title.toLowerCase()}`,
                              )
                            : t(
                                `projectDescriptions.${project.title.toLowerCase()}`,
                              ).slice(0, 80)}
                          {t(
                            `projectDescriptions.${project.title.toLowerCase()}`,
                          ).length > 80 &&
                            !showFullDescription[index] &&
                            "..."}
                        </p>
                        {t(`projectDescriptions.${project.title.toLowerCase()}`)
                          .length > 80 && (
                          <button
                            onClick={() => toggleDescription(index)}
                            className="text-blue-500 underline"
                          >
                            {showFullDescription[index]
                              ? t("showLess")
                              : t("showMore")}
                          </button>
                        )}
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        target="_blank"
                        href={project.repository}
                        className="flex max-w-[50%] justify-center gap-5 self-center rounded-full bg-terciary-color p-4 text-white"
                      >
                        <Code />
                        {isMobile ? "" : t("repository")}
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-12" />
        <CarouselNext className="size-12" />
      </Carousel>
    </div>
  );
};

export default Projects;
