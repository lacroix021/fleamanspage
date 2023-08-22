import React from 'react';
import styles from './Carousel.module.scss';
import Slider from "react-slick";


export default function Carousel({ array }) {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "gray", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}
            onClick={onClick}
          />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "gray", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={onClick}
          />
        );
    }

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className={styles.Carousel}>
            <Slider {...settings}>
            { array.map((img, index)=>{
                return (
                <div key={ index }>
                    <img src={img} alt={"screenshot-"+index} />
                </div>
                )
            })}
            </Slider>
        </section>
    )
}
