import { Input } from "../Input";
import type { SearchProps } from "./types";

export const Search = ({ searchQuery, onChange, isDisabled }: SearchProps) => {
  return (
    <form name="Search" onSubmit={(event) => event.preventDefault()}>
      <label>
        <span className="block text-lg text-gray-800 mb-4">Search</span>
        <Input
          type="search"
          name="search"
          value={searchQuery}
          onChange={(newSearchQuery) => onChange(newSearchQuery)}
          autoFocus
          isDisabled={isDisabled}
        />
      </label>
    </form>
  );
};
