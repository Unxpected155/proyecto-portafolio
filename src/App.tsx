import Header from "./sections/Header";

const App = () => {
  return (
    <div className="h-screen cursor-default">
      <Header></Header>
      <section id="aboutMe"></section>
      <section id="projects"></section>
      <section id="abilities"></section>
      <section id="contactMe"></section>
    </div>
  );
};

export default App;
