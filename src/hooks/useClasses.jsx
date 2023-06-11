import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { loading } = useAuth();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      const data = await res.json();
      return data;
    },
  });
  return [classes, refetch];
};
export default useClasses;
