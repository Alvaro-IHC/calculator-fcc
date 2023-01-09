export interface IDisplay {
  previou: string;
  answer: string;
}

export interface IKeyboard {
  handleNumber: (number: string) => void;
  handleOperator: (operator: string) => void;
  handleEqual: () => void;
  handleAC: () => void;
}

export interface IButton {
  id: string;
  area?: string;
  label: string;
  className?: string;
  onClick: (number: string) => void;
}
