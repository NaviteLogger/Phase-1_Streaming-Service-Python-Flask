import React from "react";
import "./style.css";

export default function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="bannerContainer home-banner1">
                <h1 className="home-banner-heading heading2">
                    Watch, Stream, Enjoy
                </h1>
                <span className="home-banner-sub-heading bodySmall">
                    <span>
                        <span>
                            <span>
                                Discover a world of entertainment with our simple streaming
                                platform. Whether you&apos;re into movies, TV shows, or
                                documentaries, I&apos;ve got you covered. With our
                                user-friendly interface and vast library of content, you can
                                easily find and stream your favorite shows and movies with
                                just a few clicks.
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
                <button className="buttonFilled">Learn More</button>
            </div>
        </div>
    );
};