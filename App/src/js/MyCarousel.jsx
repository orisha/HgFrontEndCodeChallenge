/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */

import React from "react";
import { Carousel } from 'react-responsive-carousel';

/**
 * Builds a responsvie carousel
 * @param Props
 * @return {*}
 * @constructor
 */
export default function CarouselComponent(Props) {



    return (
        <div className="carousel-wrapper">
            <Carousel
                useKeyboardArrows
                showArrows
                centerMode={true}
                swipeable={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop

            >
                {Props.Plans.map( plan => (
                    <div key={Math.random()}>
                        {plan}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
