export interface TableHeaderProps {
  header: string;
  onSort: (newColumnToSort: string) => void;
}
