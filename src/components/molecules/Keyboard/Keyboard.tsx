import { IKeyboard } from "../../../utils/interfaces/interfaces";
import { Button } from "../../atoms/Button/Button";
import "./styles.css";

export const Keyboard = ({
  handleNumber,
  handleOperator,
  handleEqual,
  handleAC,
}: IKeyboard) => {
  return (
    <div className='keyboard'>
      <Button
        id='clear'
        area='ac'
        label='AC'
        onClick={() => {
          handleAC();
        }}
      />
      <Button
        id='equals'
        area='eq'
        label='='
        onClick={() => {
          handleEqual();
        }}
      />
      <Button id='zero' area='ze' label='0' onClick={handleNumber} />
      <Button
        id='divide'
        label='/'
        className='operator'
        onClick={handleOperator}
      />
      <Button
        id='multiply'
        label='*'
        className='operator'
        onClick={handleOperator}
      />
      <Button id='seven' label='7' onClick={handleNumber} />
      <Button id='eight' label='8' onClick={handleNumber} />
      <Button id='nine' label='9' onClick={handleNumber} />
      <Button
        id='subtract'
        label='-'
        className='operator'
        onClick={handleOperator}
      />
      <Button id='four' label='4' onClick={handleNumber} />
      <Button id='five' label='5' onClick={handleNumber} />
      <Button id='six' label='6' onClick={handleNumber} />
      <Button
        id='add'
        label='+'
        className='operator'
        onClick={handleOperator}
      />
      <Button id='one' label='1' onClick={handleNumber} />
      <Button id='two' label='2' onClick={handleNumber} />
      <Button id='three' label='3' onClick={handleNumber} />
      <Button id='decimal' label='.' onClick={handleNumber} />
    </div>
  );
};
