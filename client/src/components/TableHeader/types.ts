import type { SortDirection } from "../../types/sortDirection";

export interface TableHeaderProps {
  header: string;
  onSort: (newColumnToSort: string) => void;
  sortDirection: SortDirection;
  isSorted: boolean;
}
