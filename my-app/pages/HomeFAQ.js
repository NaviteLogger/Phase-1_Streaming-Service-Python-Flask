import React from "react";
import "./styles.css";
import Question1 from "../components/question1";

export default function HomeFAQ() {
    return (
        <div className="home-faq">
            <div className="faqContainer">
                <div className="home-faq1">
                    <div className="home-container4">
                        <span className="overline">
                            <span>FAQ</span>
                            <br></br>
                        </span>
                        <h2 className="home-text48 heading2">Common questions</h2>
                        <span className="home-text49 bodyLarge">
                            <span>
                                Here are some of the most common questions that I get.
                            </span>
                            <br></br>
                        </span>
                    </div>
                    <div className="home-container5">
                        <Question1
                            answer="The streaming platform is a simple and user-friendly platform that allows you to stream your favorite movies, TV shows, and videos online."
                            question="What is the streaming platform?"
                        ></Question1>
                        <Question1
                            answer="You can access the streaming platform by visiting this website and creating an account. Once you have an account, you can log in and start streaming immediately."
                            question="How can I access the streaming platform?"
                        ></Question1>
                        <Question1
                            answer="The streaming platform is compatible with a wide range of devices, including smartphones, tablets, smart TVs, and computers. You can stream content on any device with an internet connection."
                            question="What devices are supported by the streaming platform?"
                        ></Question1>
                        <Question1
                            answer="Absolutely not! The streaming platform is completely free to use. You create an account just to select movies you like for later."
                            question="Is there a cost to use the streaming platform?"
                        ></Question1>
                        <Question1
                            answer="Yes, you can download select movies and TV shows to watch offline on supported devices. This feature is available for certain content."
                            question="Can I download content to watch offline?"
                        ></Question1>
                    </div>
                </div>
            </div>
        </div>
    );
};