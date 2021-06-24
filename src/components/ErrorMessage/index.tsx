import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="p-6 bg-red-400 rounded-md text-md text-white w-full block">
      {message}
    </p>
  );
};
