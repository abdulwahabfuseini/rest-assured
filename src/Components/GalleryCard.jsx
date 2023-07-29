import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Gallery } from "../assets/Data";

const GalleryCard = () => {
  return (
    <Container className="w-full h-full px-2 py-10 md:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-14">
      <header className="pb-5 text-center">
        <h1 className="text-lg font-semibold md:text-xl">
          We Provide the best Bedrooms and Poolsides
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe aut iusto debitis quo laboriosam?
        </p>
      </header>
      <Row className="grid grid-cols-2 gap-3 py-4 sm:gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {Gallery.map((item, index) => (
          <Col key={index}>
            <img src={item.image} alt="" className="object-cover w-full h-40" />
            <p className="py-1 text-center text-white bg-Header">{item.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryCard;
