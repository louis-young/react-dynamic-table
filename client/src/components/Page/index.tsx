import { Message } from "../Message";
import { Skeleton } from "../Skeleton";
import { PageProps } from "./types";

export const Page = ({ isLoading, hasError, children }: PageProps) => {
  return (
    <section className="p-12">
      {isLoading ? (
        <Skeleton />
      ) : hasError ? (
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
