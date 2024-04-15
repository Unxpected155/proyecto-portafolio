import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-200 bg-white px-10 font-bold shadow-md">
      <div>
        <Logo
          className="size-16 transform transition duration-300 hover:scale-150"
          description="Author's logo"
          imagePath={"src/assets/logo_gabo_azul.webp"}
        ></Logo>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
