import ScrollToTop from "./components/ScrollTop";
import Abilities from "./sections/Abilities";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
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
        <section id="abilities" className="bg-gray-100">
          <Abilities></Abilities>
        </section>
        <section
          id="projects"
          className="bg-[url(/software.webp)] bg-cover bg-center bg-no-repeat py-10"
        >
          <Projects />
        </section>
        <section id="contactMe">
          <ContactMe />
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
