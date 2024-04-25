import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);

  const handleChangeLanguage = () => {
    if (isEnglish) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
    setIsEnglish(!isEnglish);
  };

  return (
    <header className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-200 bg-white px-10 font-bold shadow-md">
      <div>
        <Logo
          className="size-16 transform transition duration-300 hover:scale-150"
          description="Author's logo"
          imagePath={"public/logo_gabo_azul.webp"}
        ></Logo>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="language-switch"
          color={"#333"}
          onCheckedChange={handleChangeLanguage}
        />
        <Label htmlFor="language-switch">
          {isEnglish ? "Español" : "English"}
        </Label>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
