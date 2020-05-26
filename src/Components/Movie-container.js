import React, { useState } from "react";
import MovieList from "./Movie-list";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
const List = [
  {
    title: "Western",
    rating: 6
  },
  {
    title: "Titanic",
    rating: 8
  },
  {
    title: "Avengers",
    rating: 7.5
  },
  {
    title: "Thor",
    rating: 7
  },
  {
    title: "Gladiator",
    rating: 8.5
  }
];
const MovieContainer = () => {
  const [searchedValue, setSearch] = useState("");
  const [listData, setData] = useState(List);
  const filterdata = value => {
    let filtred = List.filter(elem => {
      return (
        (elem.title.toLowerCase().indexOf(value.toLowerCase()) > -1) |
        (elem.rating
          .toString()
          .toLowerCase()
          .indexOf(value.toLowerCase()) >
          -1)
      );
    });
    setData(filtred);
    setSearch(value);
  };
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const handleClose = () => setShow(false);
  const handleSave = () => {
    List.push({ title: title, rating: rating });
    console.log(List)
    setData(List)
    handleClose();
  };
  const addMovie = () => {
    setShow(true);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter Movie title"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            <Form.Label>Movie Rating</Form.Label>
            <Form.Control
              type="text"
              value={rating}
              placeholder="Enter Movie rating"
              onChange={e => {
                setRating(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ margin: "2%" }}>
      <Row>
        <Col xl={6}>
        <Form.Control
          type="text"
          value={searchedValue}
          placeholder="filter by movie name or rating "
          onChange={e => {
            filterdata(e.target.value);
          }}
          style={{ marginRight: "2%" }}
        ></Form.Control>
        </Col>
        <Col>
        <Button type="button" onClick={() => addMovie()}>
          Add movie
        </Button>
        </Col>
        </Row>
      </div>
      <MovieList data={listData} />
    </div>
  );
};

export default MovieContainer;
