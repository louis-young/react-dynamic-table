import type { InputProps } from "./types";

export const Input = ({
  type,
  name,
  value,
  onChange,
  autoFocus,
  isDisabled,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type={type}
      name={name}
      className="border p-4 w-full max-w-xs"
      autoFocus={autoFocus}
      disabled={isDisabled}
    />
  );
};
