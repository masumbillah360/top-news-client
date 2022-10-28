import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return (
      <>
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
          <h1 className="text-center">Loading....</h1>
      </>
    );
  }
  if(!user.uid){
    return <Navigate to = "/login" state={{from : location}} replace></Navigate>
  }
  return children;
};

export default PrivateRout;
