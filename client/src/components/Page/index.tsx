import { Message } from "../Message";
import type { PageProps } from "./types";

export const Page = ({ hasError, children }: PageProps) => {
  return (
    <section className="p-12">
      {hasError ? (
        <Message
          type="error"
          message="Something went wrong. Please try again."
        />
      ) : (
        children
      )}
    </section>
  );
};
