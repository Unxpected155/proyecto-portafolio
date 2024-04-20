import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  repository: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Gamehub",
    description:
      "This website integrates the RAWG API to provide a list of games with categories and scores. Deployed on Vercel.",
    repository: "https://github.com/Unxpected155/gameHub",
    image: `src/assets/projects/Gamehub.webp`,
  },
  {
    title: "QuitSmoke",
    description:
      "A web app to help people quit smoking, featuring Spring Boot, Spring Security, Angular, and more. Includes a chatbot and wearable device integration.",
    repository: "https://github.com/Unxpected155/QuitSmoke-Backend",
    image: "src/assets/projects/QuitSmoke.webp",
  },
  {
    title: "Todo List",
    description:
      "A task management app built with TypeScript, SvelteKit, and MongoDB. Deployed on Firebase.",
    repository: "https://github.com/fbnmlns/proyecto-componentes",
    image: "src/assets/projects/TodoList.webp",
  },
  {
    title: "Calculator",
    description:
      "A simple calculator developed using HTML/CSS and JavaScript, supporting basic operations and decimal numbers.",
    repository: "https://github.com/Unxpected155/calculator",
    image: "src/assets/projects/Calculator.webp",
  },
  {
    title: "",
    description: "",
    repository: "",
    image: "src/assets/sapitoIcon.png",
  },
];

const Projects = () => {
  const [showFullDescription, setShowFullDescription] = useState<boolean[]>([]);

  const toggleDescription = (index: number) => {
    const newShowState = [...showFullDescription];
    newShowState[index] = !newShowState[index];
    setShowFullDescription(newShowState);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-title text-4xl font-bold text-white">Projects</p>
      <Carousel className="w-full max-w-[13rem] md:max-w-lg">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none bg-secondary-color">
                  <CardContent className="flex aspect-square items-center justify-center p-6 font-body">
                    <div className="flex flex-col gap-4">
                      <img
                        src={project.image}
                        alt={project.title + " image"}
                        className="rounded-lg"
                      />
                      <div className="flex flex-col gap-6">
                        <h2 className="font-title text-2xl font-semibold md:text-3xl">
                          {project.title}
                        </h2>
                        <p className="text-md md:text-lg">
                          {showFullDescription[index]
                            ? project.description
                            : project.description.slice(0, 80)}
                          {project.description.length > 80 &&
                            !showFullDescription[index] &&
                            "..."}
                        </p>
                        {project.description.length > 80 && (
                          <button
                            onClick={() => toggleDescription(index)}
                            className="text-blue-500 underline"
                          >
                            {showFullDescription[index]
                              ? "Show less"
                              : "Show more"}
                          </button>
                        )}
                      </div>
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
