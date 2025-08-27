import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logoImg from "../components/assets/images/logo-square.png";
import Directions from "../components/directions";

export default function MainPage() {
  return (
    <div className="bg-main">
      {/* โลโก้ watermark ล่าง-กึ่งกลาง */}
      <div className="bg-logo" aria-hidden="true" />
      <Container className="content">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={7} className="text-center">
            <Image
              src={logoImg}
              alt="Missing Tea"
              className="brand-logo mb-2"
            />
            <div className="brand-wordmark">MISSING TEA</div>
            <p className="brand-tagline">ชาหอมดั้งเดิมจากไต้หวัน</p>{" "}
            <span className="d-flex w-100 justify-content-center">
              <Directions />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
