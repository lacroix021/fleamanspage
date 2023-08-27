import React from 'react';
import styles from './Carousel.module.scss';
import Slider from "react-slick";


export default function Carousel({ nameSlider, array, extraSettings, clickeable = false, clickMethod = undefined }) {
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    for(const property in extraSettings){
      settings[property] = extraSettings[property];
    }


    return (
        <section className={styles.Carousel}>
            <Slider {...settings}>
            { array.map(({image, name, description}, index)=>{
                return (
                  <div key={ index }>
                    { clickeable ?
                      <div className={styles.interactable} onClick={ (event)=>clickMethod(name, description, event) }>
                        <img src={image} alt={`${nameSlider}-`+index} />
                      </div>
                    :
                      <div>
                          <img src={image} alt={`${nameSlider}-`+index} />
                      </div>
                    }
                  </div>
                )
            })}
            </Slider>
        </section>
    )
}
