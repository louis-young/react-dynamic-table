import classNames from "classnames";
import type { MessageProps } from "./types";

export const Message = ({ type, message }: MessageProps) => {
  const messageClassNames = classNames({
    "p-6 rounded-md text-md text-white w-full block": true,
    "bg-blue-400": type === "information",
    "bg-red-400": type === "error",
  });

  return <p className={messageClassNames}>{message}</p>;
};
