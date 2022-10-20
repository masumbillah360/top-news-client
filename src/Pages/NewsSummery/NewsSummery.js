import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummery = ({ news }) => {
  console.log(news);
  const { title, details, image_url, total_view, rating, author } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex">
            <Image
              src={author.img}
              roundedCircle
              style={{ height: "50px" }}
            ></Image>
            <div className="ms-2">
              <p className="mb-0">Author : {author.name}</p>
              <p>Date: {author.published_date}</p>
            </div>
          </div>
        </div>
        <div>
          <FaBookmark className="me-2"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link>Reed More</Link>
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center'>
            <div>
                <FaStar className="text-warining me-2"></FaStar>
                {rating.number}
            </div>
            <div>
                <FaEye className="me-2"></FaEye>
                {total_view}
            </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummery;
