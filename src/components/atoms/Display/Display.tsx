import { IDisplay } from "../../../utils/interfaces/interfaces";
import "./styles.css";

export const Display = ({ previou, answer }: IDisplay) => {
  return (
    <div id='display-container'>
      <p className='first-row'>{previou}</p>
      <p id='display' className='second-row'>
        {answer}
      </p>
    </div>
  );
};
