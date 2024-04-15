import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="cursor-pointer">
      <Header></Header>
      <div className="h-screen">
        <section id="aboutMe" className="bg-primary-color p-8">
          <AboutMe></AboutMe>
        </section>
        <section id="projects" className="py-10">
          <Projects></Projects>
        </section>
        <section id="abilities"></section>
        <section id="contactMe"></section>
      </div>
    </div>
  );
};

export default App;
