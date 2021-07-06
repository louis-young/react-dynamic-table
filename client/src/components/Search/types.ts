export interface SearchProps {
  searchQuery: string;
  onChange: (newSearchQuery: string) => void;
  isDisabled: boolean;
}
