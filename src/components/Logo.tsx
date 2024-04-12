type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  typeLogo: "logo_gabo_azul.webp" | "logo_porras_azul.webp";
  description: string;
};

const Logo = ({ typeLogo, description, ...props }: ImageProps) => {
  return <img src={typeLogo} alt={description} {...props} />;
};

export default Logo;
