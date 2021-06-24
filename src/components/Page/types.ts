import type { ReactNode } from "react";

export interface PageProps {
  isLoading: boolean;
  hasError: boolean;
  children: ReactNode;
}
