import type { InputProps } from "./types";

export const Input = ({ type, name, value, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      autoFocus
      type={type}
      name={name}
      className="border p-4 w-full max-w-xs"
    />
  );
};
