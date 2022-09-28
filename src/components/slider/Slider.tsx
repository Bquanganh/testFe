import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { sliderImg } from "../../sliderImg";
import './slider.scss'
function SampleArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "hsla(0,0%,100%,.6);" }}
        onClick={onClick}
      />
    );
  }
  

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
            
          {sliderImg.map((img)=>(
            <div className="slider-img">
                <img src={img} alt='slider-img'/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}