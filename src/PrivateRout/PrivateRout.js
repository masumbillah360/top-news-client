import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const PrivateRout = ({ children }) => {
  const { user } = useContext(AuthContext);
  if(!user.uid){
    return <Navigate to = "/login"></Navigate>
  }
  return children;
};

export default PrivateRout;
