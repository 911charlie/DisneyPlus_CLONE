import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ImgSlider() {

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true
    };

  return (
    <Carousel {...setting}>
        <Wrap>
            <img src='/images/slider-badging.jpg' alt="" />
        </Wrap>
        <Wrap>
            <img src='/images/slider-badag.jpg' alt="" />
        </Wrap>
        
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    padding-top: 18px;

    .slick-list{
        overflow: visible;
    }
    
    button{
        z-index: 1;
    }

    li.slick-active button:before {
        color: white;
    }

    ul li button{
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

`

const Wrap =styled.div`
    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition: 300ms;
        }
    }
    height: 350px;
    cursor: pointer;
    

`