import { useAppSelector } from "@/store";

export const useIsUserLogin = () => {
  const auth = useAppSelector((c) => c.auth);
  return !!auth && !!auth.data.id && !!auth?.data?.id;
};
