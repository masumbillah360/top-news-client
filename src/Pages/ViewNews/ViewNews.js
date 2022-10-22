import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const ViewNews = () => {

    const news = useLoaderData();
    console.log(news);
    const { category_id,title, details, image_url, total_view, rating, author } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex">
            <Image
              src={author?.img}
              roundedCircle
              style={{ height: "50px" }}
            ></Image>
            <div className="ms-2">
              <p className="mb-0">Author : {author?.name}</p>
              <p>Date: {author?.published_date}</p>
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
          {details}
          <Link to={`/category/${category_id}`}>More News</Link>
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

export default ViewNews;