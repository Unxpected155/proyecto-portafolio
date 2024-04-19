import ScrollToTop from "./components/ScrollTop";
import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="cursor-pointer">
      <ScrollToTop />
      <Header></Header>
      <div className="h-screen">
        <section id="aboutMe" className="bg-primary-color p-8">
          <AboutMe></AboutMe>
        </section>
        <section
          id="projects"
          className="bg-[url(src/assets/software.webp)] bg-cover bg-center bg-no-repeat py-10"
        >
          <Projects></Projects>
        </section>
        <section id="abilities"></section>
        <section id="contactMe"></section>
      </div>
    </div>
  );
};

export default App;
