// import React from 'react';
import Card from '../../css/Detail.module.css';
import img from '../../images/main.png';
import img1 from '../../images/main1.png';
import img2 from '../../images/main2.png';
import Carousel from 'react-bootstrap/Carousel';

function CardSlider() {
  return (
    <>
      <div className={Card.top}>상단</div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-50" src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={img} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={img1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CardSlider;
