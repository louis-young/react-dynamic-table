import { Input } from "../Input";
import type { SearchProps } from "./types";

export const Search = ({ searchQuery, onChange, isDisabled }: SearchProps) => {
  return (
    <form name="Search" onSubmit={(event) => event.preventDefault()}>
      <label className="flex flex-col gap-4 max-w-xs">
        <span className="text-lg text-gray-800">Search</span>
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
