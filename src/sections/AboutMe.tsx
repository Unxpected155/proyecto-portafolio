import DownloadFileButton from "@/components/DownloadFileButton";
import Logo from "@/components/Logo";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-wrap">
      <div className="flex flex-col items-center gap-4 text-center font-title text-white">
        <p className="mb-8 text-2xl font-bold md:text-5xl">Hello 👋 , I'm</p>
        <p className="text-5xl font-bold text-secondary-color md:text-8xl">
          Gabriel Porras
        </p>
        <p className="mt-8 text-xl font-bold md:text-3xl">
          Software engineer specialized in Full-Stack development, with
          experience in HTML/CSS, Node.js, Java, C++, C#, React, Angular,
          SvelteKit, TypeScript, and proficiency in both relational and
          non-relational databases
        </p>
        <div className="flex flex-col gap-4">
          <DownloadFileButton
            className="mt-6 w-40 items-center rounded-3xl bg-secondary-color p-2 text-xl font-bold text-black md:h-20 md:w-60"
            fileRef={"CV Tarea 3 Ingles.pdf"}
            nameDownload={"Gabriel's CV"}
          >
            My CV
          </DownloadFileButton>
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
