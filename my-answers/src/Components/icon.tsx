import pawprint from "../assets/images/paw-print.jpg";

type ImageProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};
function PawPrint({ className, width, height }: ImageProps) {
  return (
    <img
      src={pawprint}
      alt="Paw print"
      className={className}
      style={{ width, height }}
    />
  );
}
export { PawPrint };
