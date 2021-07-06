import { User } from "../../types/user";

export interface TableProps {
  headers: string[];
  users: User[];
  onSort: (newColumnToSort: string) => void;
  isLoading: boolean;
}
