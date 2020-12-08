import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Cards from "./Card";
import coupe from "../../assets/img/Mustang.webp";
import sedan from "../../assets/img/Sedan.jpg";
import truck from "../../assets/img/truck.jpg";
import SUV from "../../assets/img/SUV.jpg";
import int from "../../assets/img/Interior.jpg";
import ex from "../../assets/img/exterior.jpg";

// core components

function Services() {
  return (
    <>
      <div className="section section-examples" data-background-color="white" id="services-section">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <Col>
          <Cards pic={ coupe } title="Coupes" text="Complete detail for compact cars and coupes. Only $100!"/>
            </Col>
            <Col>
            <Cards pic={ sedan } title="Sedans" text="Complete detail for full-sized sedans. Only $125!"/>
            </Col>
            <Col>
            <Cards pic={ truck } title="1/2 Ton / Mid-Size SUV" text="Complete detail for large vehicles. Only $150!"/>
            </Col>
            <Col>
            <Cards pic={ SUV } title="Extra Large" text="Complete detail for heavy trucks and full sized SUVs. Only $170!"/>
            </Col>
            <Col>
            <Cards pic={ int } title="Interior Only" text="Interior detail for any size vehicle. Starting at $70!"/>
            </Col>
            <Col>
            <Cards pic={ ex } title="Exterior Only" text="Exterior detail for any size vehicle. Starting at $75!"/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
