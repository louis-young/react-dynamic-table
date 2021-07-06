import { Input } from "../Input";
import type { SearchFormProps } from "./types";

export const SearchForm = ({ searchQuery, onChange }: SearchFormProps) => {
  return (
    <form name="Search" onSubmit={(event) => event.preventDefault()}>
      <label>
        <span className="block text-lg text-gray-800 mb-4">Search</span>
        <Input
          type="search"
          name="search"
          value={searchQuery}
          onChange={(newSearchFormQuery) => onChange(newSearchFormQuery)}
          autoFocus
        />
      </label>
    </form>
  );
};
