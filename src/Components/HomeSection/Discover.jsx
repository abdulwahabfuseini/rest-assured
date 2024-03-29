import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { DisCover } from './HomeData'


const Discover = () => {
  return (
    <Container className="w-full h-full px-2 pt-5 sm:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-12">
      <Row className="flex flex-col mx-auto sm:items-center sm:flex-row max-w-7xl">
        <Col className="space-y-6 sm:w-2/5"  data-aos="fade-right">
          <h1 className="text-2xl md:text-3xl">
            NEW PLACES TO <br /> DISCOVER
          </h1>
          <h2>Bedrooms, Resorts, Residence</h2>
        </Col>
        <Col className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-14 sm:w-3/5"  data-aos="fade-left">
          {
            DisCover.map((cover, index) => (
              <Col key={index} className="w-full">
                <img src={cover.cover} alt="New" className="object-cover w-full h-60" />
                <h6 className="py-2 text-xs text-center border-b-2 shadow-md border-dry bg-slate-100">{cover.location}</h6>
              </Col>
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Discover