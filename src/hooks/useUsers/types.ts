import { SortDirection } from "../../types/sortDirection";

export interface UseUsersParameters {
  searchQuery: string;
  sortDirection: SortDirection;
  columnToSort: string | undefined;
}
