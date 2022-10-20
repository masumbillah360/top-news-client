import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <Container>
      <Header></Header>
      <Row>
        <Col lg={2} md={12}>
          <LeftNav></LeftNav>
        </Col>
        <Col>
          <Outlet lg={7} md={8}></Outlet>
        </Col>
        <Col lg={3} md={4}>
          <RightNav></RightNav>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
