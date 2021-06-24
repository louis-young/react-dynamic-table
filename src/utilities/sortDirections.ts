import { SortDirection } from "../types/sortDirection";

export const getNewSortDirection = (currentSortDirection: SortDirection) => {
  switch (currentSortDirection) {
    case SortDirection.Unsorted:
      return SortDirection.Ascending;
    case SortDirection.Ascending:
      return SortDirection.Descending;
    case SortDirection.Descending:
      return SortDirection.Unsorted;
  }
};
