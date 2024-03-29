import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FootLinks, Socialconnect } from "./Data";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo1.png";
import { FaApple, FaChevronDown, FaGooglePlay } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Tooltip } from "antd";

const Footer = () => {
  return (
    <Container className="relative w-full h-full text-white sm:px-6 md:px-4 lg:px-16 pattern">
      <Row className="mx-auto max-w-7xl">
        <Row className="hidden grid-cols-4 sm:grid">
          {FootLinks.map((foot, index) => {
            return (
              <Col key={index}>
                <h1 className="relative pt-8 mb-2 text-xl font-semibold before:absolute before:-bottom-1 before:left-0 before:w-8 before:h-1 before:bg-white">
                  {foot.title}
                </h1>
                {foot.Links.map((items, index) => {
                  return (
                    <ul key={index} className="py-1">
                      <h6 className="text-lg no-underline list-none cursor-pointer hover:text-yellow-400">
                        <Link to={items.path}>{items.display}</Link>
                      </h6>
                    </ul>
                  );
                })}
              </Col>
            );
          })}
        </Row>
        <Row className="grid sm:hidden">
          {FootLinks.map((foot, index) => {
            return (
              <Col key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<FaChevronDown className="text-white" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="rounded-none shadow-lg pattern"
                  >
                    <Typography fontSize={22} className="py-2 text-white">
                      {foot.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {foot.Links.map((items, index) => {
                        return (
                          <ul key={index} className="py-1">
                            <li className="text-lg no-underline list-none cursor-pointer">
                              <Link to={items.path}>{items.display}</Link>
                            </li>
                          </ul>
                        );
                      })}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Row className="flex flex-col justify-between px-8 mt-8 sm:items-center sm:px-0 sm:flex-row ">
            <img
              src={Logo}
              alt="logo"
              className="object-contain sm:w-40 lg:w-64 lg:h-16"
            />
            <span>
              <h1 className="py-4 text-xl">Connect with us</h1>
              <Col className="flex items-center gap-2 pt-2">
                {Socialconnect.map((connect, index) => {
                  return (
                    <Col key={index}>
                      <Tooltip
                        color={connect?.color}
                        title={connect?.title}
                        key={connect.id}
                      >
                        <a href={connect?.link} target="blank">
                          <span>{connect.icon}</span>
                        </a>
                      </Tooltip>
                    </Col>
                  );
                })}
              </Col>
            </span>
            <span>
              <h1 className="py-4 text-xl">Download our App</h1>
              <Col className="flex items-center gap-4 cursor-pointer">
                <span className="flex items-center justify-center gap-2 px-4 py-2 text-black bg-white rounded-lg">
                  <FaApple className="w-6 h-6 " />
                  <h4>iOS</h4>
                </span>
                <span className="flex items-center justify-center gap-2 px-4 py-2 text-black bg-white rounded-lg">
                  <FaGooglePlay className="w-6 h-6" />
                  <h4>Andriod</h4>
                </span>
              </Col>
            </span>
          </Row>
        </Row>
        <Row className="px-2 py-8 mx-auto mt-10 text-center border-t-4 max-w-7xl">
          <h1 className="text-xl">
            Rest Assured Hotel{" "}
            <span>Copyright &copy; 2023 All Rights Reserved</span>
            <h1 className="py-4 text-md">Created by: F.A.W</h1>
          </h1>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
