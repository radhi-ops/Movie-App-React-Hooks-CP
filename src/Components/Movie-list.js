import React from "react";
import Card1 from "./Card";
import { Row } from "react-bootstrap";

const MovieList = props => {
  const listOfmovies = props.data.map(movie => {
    return <Card1 data={movie}></Card1>;
  });
  return (
    <div>
      <Row className="row justify-content-space-around align-item-center">
        {listOfmovies}
      </Row>
    </div>
  );
};

export default MovieList;
