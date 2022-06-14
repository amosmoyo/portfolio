import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Splash from "../assets/home_anime.gif";
import Modal from "../components/modal/Modal";
import './home.css'

const Home = () => {
  const [close, setClose] = React.useState(true);

  const closeModal = () => {
    setClose(false)
  }
  return (
    <div className="main">
      {/* {close && <Modal closeModal={closeModal} />} */}
      <Container className="container">
        <div className="d-flex flex-column align-items-center justify-content-center mt-4 py-3">
            <h1 className="title mb-1 display-1 text-light">Welcome to my portfolio!</h1>
            <p className="p-2 my-2" style={{"color":"white"}}>Hey!, This is Moyo a full stack dev and data analysts</p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly mt-3 parent-btn">
            <Link to="/about" id="btnSize1" className="btn btn-dark rounded-pill btnSize">
              Learn more about me
            </Link>
            <Link to="/contact" id="btnSize2" className="btn btn-outline-dark rounded-pill  btnSize">
              Connect with me
            </Link>
          
        </div>
        <div className="splash p-3 mt-1">
          <img src={Splash} alt="splash" className="home_anime" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
