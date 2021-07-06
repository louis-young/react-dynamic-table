export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  autoFocus: boolean;
  isDisabled: boolean;
}
