import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCollapse,
  CardBody,
  Card,
} from "reactstrap";

// core components

function About() {
  return (
    <>
      <div
        className="section section-about"
        data-background-color="black"
        id="about-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">It started with a dream...</h3>
              <h5 className="description">
                I've always known I wanted to be a business owner, and cars have always been a passion.
                In 2019 I decided it was time to finally pursue my dream and mix business with passion.
                Craft Details is the result of that decision, and since it's foundation I've been proudly
                serving the local community. 
              </h5>
              <h5 className="description">
                Reach out today, and let us know how we can best serve you!
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                size="lg"
                color="info"
                id="buttonToggler"
              >
                Contact
              </Button>
              <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
                <Card color="neutral" id="about-card">
                  <CardBody>
                    <h5 className="text-muted mb-0">
                      <i className="now-ui-icons tech_mobile mr-1 align-middle"></i>
                      (660) 464-0543
                    </h5>
                    {/* <hr className="w-50"></hr>
                    <h5 className="text-muted">
                      <i className="now-ui-icons ui-1_email-85 mr-1 align-middle"></i>
                        
                    </h5> */}
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting local business!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/Craft-Details-104821051387770/"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              {/* <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
