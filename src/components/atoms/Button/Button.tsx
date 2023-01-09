import { IButton } from "../../../utils/interfaces/interfaces";
import "./styles.css";

export const Button = ({
  id,
  area = "",
  label,
  className = "",
  onClick,
}: IButton) => {
  return (
    <button
      id={id}
      className={`btn ${area} ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};
