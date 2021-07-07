import type { User } from "../../types/user";
import type { SortDirection } from "../../types/sortDirection";

export interface TableProps {
  headers: string[];
  users: User[];
  onSort: (newColumnToSort: string) => void;
  sortDirection: SortDirection;
  columnToSort: string | undefined;
  isLoading: boolean;
}
