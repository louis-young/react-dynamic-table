import classNames from "classnames";
import { SortDirection } from "../../types/sortDirection";
import type { SortDirectionIndicatorProps } from "./types";

export const SortDirectionIndicator = ({
  sortDirection,
}: SortDirectionIndicatorProps) => {
  const sortDirectionIndicatorClassNames = classNames({
    "h-2 w-2 bg-black transform": true,
    "rotate-45 origin-bottom-left": sortDirection === SortDirection.Ascending,
    "-rotate-45 origin-top-left": sortDirection === SortDirection.Descending,
  });

  return (
    <div className="w-3 overflow-hidden inline-block">
      <div className={sortDirectionIndicatorClassNames}></div>
    </div>
  );
};
