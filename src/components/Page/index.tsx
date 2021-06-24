import { ErrorMessage } from "../ErrorMessage";
import { Skeleton } from "../Skeleton";
import { PageProps } from "./types";

export const Page = ({ isLoading, hasError, children }: PageProps) => {
  return (
    <section className="p-12">
      {isLoading ? (
        <Skeleton />
      ) : hasError ? (
        <ErrorMessage message="Something went wrong. Please try again." />
      ) : (
        children
      )}
    </section>
  );
};
