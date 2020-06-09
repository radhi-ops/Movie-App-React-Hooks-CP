import React, { useState } from "react";
import MovieList from "./Movie-list";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
const List = [
  {
    title: "Le Parrain",
    poster:
      "http://fr.web.img5.acsta.net/c_215_290/medias/nmedia/18/35/57/73/18660716.jpg",
    rating: 5,
    year: 1972
  },

  {
    title: "10 JOURS SANS MAMAN",
    poster:
      "http://fr.web.img2.acsta.net/r_1920_1080/pictures/19/12/24/11/26/5091620.jpg",
    rating: 2,
    year: 2020
  },

  {
    title: "La Ligne verte",
    poster:
      "http://fr.web.img4.acsta.net/r_1920_1080/medias/nmedia/18/66/15/78/19254683.jpg",
    rating: 5,
    year: 2000
  },

  {
    title: "Interstellar",
    poster:
      "http://fr.web.img2.acsta.net/c_215_290/pictures/14/09/24/12/08/158828.jpg",
    rating: 4,
    year: 2014
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
  const [year, setYear] = useState(0);

  const updaterating = position => {
    let list = ["☆", "☆", "☆", "☆", "☆"];

    for (let i = 0; i <= position; i++) {
      list[i] = <span style={{ fontSize: "22px", color: "red" }}>★</span>;
    }
    setStars(list);
    setSearchRating(position + 1);
  };
  const handleClose = () => setShow(false);
  const handleSave = () => {
    List.push({
      title: title,
      rating: rating,
      year: year,
      poster:
        "data:image/png;base64,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"
    });
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
            <Form.Label>Release date</Form.Label>
            <Form.Control
              type="number"
              value={year}
              placeholder="Enter release date"
              onChange={e => {
                setYear(e.target.value);
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
                setSearch(e.target.value);
              }}
              style={{ marginRight: "2%" }}
            ></Form.Control>
          </Col>
          <Col>
            {stars.map((star, i) => {
              return (
                <span
                  onMouseOver={() => {
                    updaterating(i);
                  }}
                >
                  {" "}
                  {star}
                </span>
              );
            })}
            <span style={{ marginLeft: "2%" }}>
              <i class="fa fa-undo" onClick={() => updaterating(-1)}></i>
            </span>
          </Col>
          <Col>
            <Button type="button" onClick={() => addMovie()}>
              Add movie
            </Button>
          </Col>
        </Row>
      </div>
      <MovieList
        data={listData.filter(itm => {
          return (
            (itm.rating == searchedRating || searchedRating === 0) &&
            (itm.title.toLowerCase().indexOf(searchedValue.toLowerCase()) >
              -1 ||
              searchedValue === "")
          );
        })}
      />
    </div>
  );
};

export default MovieContainer;
