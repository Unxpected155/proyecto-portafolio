import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    title: "HTML/CSS",
    image: "public/technologies/htmlcss.webp",
    color: "#E44D26",
  },
  {
    title: "AWS",
    image: "public/technologies/aws.webp",
    color: "#223040",
  },
  {
    title: "React JS",
    image: "public/technologies/reactjs.webp",
    color: "#119FCB",
  },
  {
    title: "AngularJS",
    image: "public/technologies/angular.webp",
    color: "#A60903",
  },
  {
    title: "SvelteKit",
    image: "public/technologies/sveltekit.webp",
    color: "#FF3E00",
  },
  {
    title: "ExpressJS",
    image: "public/technologies/expressjs.webp",
    color: "#F1C310",
  },
  {
    title: "NodeJS",
    image: "public/technologies/nodejs.webp",
    color: "#67A062",
  },
  {
    title: "Oracle",
    image: "public/technologies/oracledb.webp",
    color: "#EE1C24",
  },
  {
    title: "MySQL",
    image: "public/technologies/mysql.webp",
    color: "#016189",
  },
  {
    title: "Mongo DB",
    image: "public/technologies/mongodb.webp",
    color: "#4FA940",
  },
  {
    title: "Firebase",
    image: "public/technologies/firebase.webp",
    color: "#FFCB2D",
  },
  {
    title: "TypeScript",
    image: "public/technologies/typescript.webp",
    color: "#3279C7",
  },
  {
    title: "Java",
    image: "public/technologies/java.webp",
    color: "#5482A2",
  },
  {
    title: "C#",
    image: "public/technologies/csharp.webp",
    color: "#A279DD",
  },
  {
    title: "C++",
    image: "public/technologies/cplus.webp",
    color: "#659AD1",
  },
];

const Abilities = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <p className="font-title text-2xl font-bold md:text-5xl">
        {t("nav.technologies")}
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-8/12 max-w-[18rem] md:max-w-xl lg:max-w-4xl "
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem key={tech.title} className="md:basis-1/3 ">
              <div className="p-1">
                <Card
                  className={`flex h-44 items-center justify-center p-4`}
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? `0 0 50px ${tech.color}`
                        : "none",
                  }}
                  onMouseEnter={() => setHoveredIndex(index as unknown as null)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={tech.image} alt="" className="size-24" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Abilities;
