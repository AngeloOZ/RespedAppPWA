import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useUsuarios = (url = "", config = []) => {
   const newUrl = (url === "")? "/usuario":`/usuario/tipo/${url}`
   const { data, error } = useSWR(newUrl, fetcher, config);
   return {
      users: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}
