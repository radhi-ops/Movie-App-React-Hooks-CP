import React from "react";
import { Card, Col } from "react-bootstrap";

const Card1 = props => {
  return (
    <Col xl={3} style={{ margin: "2%" }}>
      <Card>
        <Card.Body>
          <Card.Title>Title : {props.data.title}</Card.Title>
          <Card.Text>Rating : {props.data.rating}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Card1;
