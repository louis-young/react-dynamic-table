import { useQuery } from "react-query";
import { get } from "../../../api";
import { getUsersQueryKey } from "../../../utilities/queryKeys";

const endpoint = process.env.REACT_APP_API_ENDPOINT as string;

export const useUsersQuery = () => {
  const queryKey = getUsersQueryKey();

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    isError: hasUsersError,
  } = useQuery(queryKey, () => get(endpoint));

  return { usersData, isLoadingUsers, hasUsersError };
};
