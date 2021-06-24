import type { ReactNode } from "react";

export interface TableProps {
  isLoading: boolean;
  headers: ReactNode;
  rows: ReactNode;
}
