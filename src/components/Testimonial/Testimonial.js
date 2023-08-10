import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import userReviews from '../../Data/UserReview';
import "../../../src/App.css";
import img from "../images/services.jpg";
import img1 from "../images/pricing.jpg";
import Back from "../common/Back";
import "../Testimonial/Testimonial.css";

export default class Testimonials extends Component {
    render() {
        return (
            <section className='services mb'>
                <Back name='' title='Our Client Reviews' cover={img} />

                <div className="container my-4"> <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={5000}
                >
                    {userReviews.map((review) => (
                        <div className="my-6" key={review.id}>
                            <div className="w-9 h-1/2 ml-96 ">
                                <img
                                    className="iconimage w-full h-full rounded-full"
                                    src={img1}
                                    alt={`User ${review.user}`}
                                /></div>
                            <div className="myCarousel">
                                <h3>{review.user}</h3>
                                <h4>{review.designation}</h4>
                                <p className="mb-9">{review.review}</p>
                                <div>
                                    <a href={review.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "rgb(170, 145, 102)",
                                            fontSize: "16px",
                                            border: "3px solid",
                                            fontWeight: "500",
                                            borderRadius: "5px",
                                            padding: "5px",

                                        }}>
                                        Know More
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </Carousel>
                </div>
            </section>

        );
    }
}