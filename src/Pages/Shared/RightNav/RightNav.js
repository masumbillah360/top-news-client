import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";


import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import FaltuMap from "../../Map/Map";

const RightNav = () => {
  const provider = new GoogleAuthProvider();
  const {gLogin, setUser} = useContext(AuthContext);
  const gLoginHandler = ()=>{
    gLogin(provider)
    .then(result=>{
      setUser(result.user);
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <button onClick={gLoginHandler} className="btn btn-danger w-100 my-2">
        <FaGoogle></FaGoogle> Sign In With Google
      </button>
      <button className="btn btn-primary w-100 my-2">
        <FaFacebook></FaFacebook> Sign In With Facebook
      </button>

      <div>
        <h4>Followed Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <Link className="nav-link text-primary">
              <FaFacebook></FaFacebook> Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="nav-link text-info">
              <FaTwitter></FaTwitter> Twitter
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="nav-link text-danger">
              <FaYoutube></FaYoutube> YouTube
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="nav-link text-success">
              <FaWhatsapp></FaWhatsapp> Whatsapp
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-2">
      <FaltuMap></FaltuMap>
      </div>
    </div>
  );
};

export default RightNav;
