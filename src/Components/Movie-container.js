import React, { useState } from "react";
import MovieList from "./Movie-list";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
const List = [
  {
    title: "Western",
    rating: 4
  },
  {
    title: "Titanic",
    rating: 5
  },
  {
    title: "Avengers",
    rating: 2
  },
  {
    title: "Thor",
    rating: 5
  },
  {
    title: "Gladiator",
    rating: 4
  }
];
const starsList = ["☆", "☆", "☆", "☆", "☆"];
const MovieContainer = () => {
  const [searchedValue, setSearch] = useState("");
  const [searchedRating, setSearchRating] = useState(0);
  const [listData, setData] = useState(List);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [stars, setStars] = useState(starsList);
  const filterdata = value => {
    let filtred = List.filter(elem => {
      if (searchedRating === 0) {
        return elem.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
      }
      else
      {
        return (
          elem.title.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          elem.rating.toString().indexOf(searchedRating) > -1
        );
      }
    });
    setData(filtred);
    setSearch(value);
  };
  const filterbyrating = position => {
    let list = ["☆", "☆", "☆", "☆", "☆"];

    for (let i = 0; i <= position; i++) {
      list[i] = <span style={{ fontSize: "22px" ,color:"red"}}>★</span>;
    }
    setStars(list);
    setSearchRating(position + 1);

    let filtred = List.filter(elem => {
      if (searchedValue === "") {
        if (position === -1) {
          return elem;
        } else {
          return elem.rating.toString().indexOf(position + 1) > -1;
        }
      } else {
        if (position === -1) {
          return (
            elem.title.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1
          );
        } else {
          return (
            elem.rating.toString().indexOf(position + 1) > -1 &&
            elem.title.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1
          );
        }
      }
    });
    setData(filtred);
  };
  const handleClose = () => setShow(false);
  const handleSave = () => {
    List.push({ title: title, rating: rating });
    console.log(List);
    setData(List);
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
              type="number"
              max="5"
              min="0"
              value={rating}
              placeholder="Enter Movie rating"
              onChange={e => {
                if (e.target.value < 0 || e.target.value > 5) {
                  setRating(0);
                } else {
                  setRating(e.target.value);
                }
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
          <Col xl={4}>
            <Form.Control
              type="text"
              value={searchedValue}
              placeholder="filter by movie name"
              onChange={e => {
                filterdata(e.target.value);
              }}
              style={{ marginRight: "2%" }}
            ></Form.Control>
          </Col>
          <Col>
            {stars.map((star, i) => {
              return (
                <span
                  onMouseOver={() => {
                    filterbyrating(i);
                  }}
                  
                >
                  {" "}
                  {star}
                </span>
              );
            })}
            <span style={{ marginLeft: "2%" }}>
              <i class="fa fa-undo" onClick={() => filterbyrating(-1)}></i>
            </span>
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
