import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_apiServerUrl}`,
});

export default function useAxiosPublic() {
  return axiosPublic;
}
