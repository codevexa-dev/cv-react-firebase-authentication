import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
