type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  imagePath: string;
  description: string;
};

const Logo = ({ imagePath, description, ...props }: ImageProps) => {
  return <img src={imagePath} alt={description} {...props} />;
};

export default Logo;
