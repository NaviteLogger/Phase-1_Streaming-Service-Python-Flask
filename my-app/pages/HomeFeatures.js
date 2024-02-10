import React from "react";
import "./styles.css";
import FeatureCard from '../components/feature-card'

export default function HomeFeatures() {
    return (
        <div className="home-features">
            <div className="featuresContainer">
                <div className="home-features1">
                    <div className="home-container2">
                        <span className="overline">
                            <span>features</span>
                            <br></br>
                        </span>
                        <h2 className="home-features-heading heading2">
                            Unleash the Power of Streaming
                        </h2>
                        <span className="home-features-sub-heading bodyLarge">
                            <span>
                                <span>
                                    <span>
                                        Experience the future of entertainment with our
                                        cutting-edge features
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="home-container3">
                        <FeatureCard
                            heading="Easy-to-use Interface"
                            subHeading="Intuitive and user-friendly interface for seamless navigation"
                        ></FeatureCard>
                        <FeatureCard
                            heading="High-Quality Streaming"
                            subHeading="Enjoy your favorite content in stunning HD quality"
                        ></FeatureCard>
                        <FeatureCard
                            heading="Personalized Recommendations"
                            subHeading="Discover new shows and movies tailored to your interests"
                        ></FeatureCard>
                        <FeatureCard
                            heading="Multi-Device Support"
                            subHeading="Stream on any device, anytime, anywhere"
                        ></FeatureCard>
                    </div>
                </div>
            </div>
        </div>
    );
};