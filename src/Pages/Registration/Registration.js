import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Registration = () => {
  const { signUp, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
    .then((result)=> {
      result.user.displayName = name;
      setUser(result.user);
      navigate('/');

    })
    .catch(err=>{
      setUser({});
      console.log(err);
    })
  }
  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
        <div className="text-center mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Registration;
