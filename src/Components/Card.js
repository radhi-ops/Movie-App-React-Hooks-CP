import React from "react";
import { Card, Col } from "react-bootstrap";

const Card1 = props => {
   const converttostar = () => {
    let list = ["☆", "☆", "☆", "☆", "☆"];

    for (let i = 0; i < props.data.rating; i++) {
      list[i] = <span style={{ fontSize: "22px" ,color:"yellow"}}>★</span>;
    }
    for (let i =  props.data.rating; i < 5; i++) {
      list[i] = <span style={{ fontSize: "22px" ,color:"black"}}>☆</span>;
    }
    return list;
    //  var str ="★" ;
     //  return str.toString().repeat(props.data.rating).concat('☆'.repeat(5-props.data.rating))
   }
  return (
    <Col xl={3} style={{ margin: "2%" }}>
      <Card>
        <Card.Body>
          <Card.Title>Title : {props.data.title}</Card.Title>
          <Card.Text>Rating : {converttostar()} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Card1;

// ★☆
