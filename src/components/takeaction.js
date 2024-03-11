import React, { useRef, useState, useEffect } from 'react';
import "../css/takeaction.css"
import One from "../images/takeaction-pictures/seminarpic.jpg"
import Two from "../images/takeaction-pictures/adulted-1024x682.jpg"
import Three from "../images/takeaction-pictures/classelder.jpg"
import Four from "../images/takeaction-pictures/computerclass.jpg"
import Five from "../images/takeaction-pictures/tess.jpg"
import Six from "../images/takeaction-pictures/seminarpic.jpg"
import Seven from "../images/takeaction-pictures/adulted-1024x682.jpg"
import Eight from "../images/takeaction-pictures/classelder.jpg"
import Nine from "../images/takeaction-pictures/computerclass.jpg"
import Ten from "../images/takeaction-pictures/tess.jpg"

function ElderPrograms() {
//     const trackRef = useRef(null);
//     const slideRef = useRef([]);
//     const nextButtonRef = useRef(null);
//     const prevButtonRef = useRef(null);
//     const dotsNavRef = useRef(null);
//     const dotsRef = useRef([]);
//     const [slideWidth, setSlideWidth] = useState(0);

//     useEffect(() => {
//         const track = trackRef.current;
//         const slide = Array.from(track?.children || []); // Add a defensive check here
//         slideRef.current = slide;
//         const nextButton = nextButtonRef.current;
//         const prevButton = prevButtonRef.current;
//         const dotsNav = dotsNavRef.current;
//         const dots = Array.from(dotsNav?.children || []); // Add a defensive check here
//         dotsRef.current = dots;

//         setSlideWidth(slide[0].getBoundingClientRect().width + 150);

//         const setSlidePosition = (slide, index) => {
//             slide.style.left = slideWidth * index + 'px';
//         };

//         slide.forEach(setSlidePosition);

//         const moveToSlide = (track, currentSlide, targetSlide) => {
//             track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//             currentSlide.classList.remove('current-slide');
//             targetSlide.classList.add('current-slide');
//         };

//         const updateDots = (currentDot, targetDot) => {
//             currentDot.classList.remove('current-slide');
//             targetDot.classList.add('current-slide');
//         };

//         const hideShowArrows = (slide, prevButton, nextButton, targetIndex) => {
//             if (targetIndex === 0) {
//                 prevButton.classList.add('is-hidden');
//                 nextButton.classList.remove('is-hidden');
//             } else if (targetIndex === slide.length - 1) {
//                 prevButton.classList.remove('is-hidden');
//                 nextButton.classList.add('is-hidden');
//             } else {
//                 prevButton.classList.remove('is-hidden');
//                 nextButton.classList.remove('is-hidden');
//             }
//         };

//         const handlePrevButtonClick = () => {
//             const currentSlide = track.querySelector('.current-slide');
//             const prevSlide = currentSlide.previousElementSibling;
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const prevDot = currentDot.previousElementSibling;
//             const prevIndex = slide.findIndex(slide => slide === prevSlide);

//             moveToSlide(track, currentSlide, prevSlide);
//             updateDots(currentDot, prevDot);
//             hideShowArrows(slide, prevButton, nextButton, prevIndex);
//         };

//         const handleNextButtonClick = () => {
//             const currentSlide = track.querySelector('.current-slide');
//             const nextSlide = currentSlide.nextElementSibling;
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const nextDot = currentDot.nextElementSibling;
//             const nextIndex = slide.findIndex(slide => slide === nextSlide);

//             moveToSlide(track, currentSlide, nextSlide);
//             updateDots(currentDot, nextDot);
//             hideShowArrows(slide, prevButton, nextButton, nextIndex);
//         };

//         const handleDotClick = (e) => {
//             const targetDot = e.target.closest('button');

//             if (!targetDot) return;

//             const currentSlide = track.querySelector('.current-slide');
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const targetIndex = dots.findIndex(dot => dot === targetDot);
//             const targetSlide = slide[targetIndex];

//             moveToSlide(track, currentSlide, targetSlide);
//             updateDots(currentDot, targetDot);
//             hideShowArrows(slide, prevButton, nextButton, targetIndex);
//         };

//         prevButton.addEventListener('click', handlePrevButtonClick);
//         nextButton.addEventListener('click', handleNextButtonClick);
//         dotsNav.addEventListener('click', handleDotClick);

//         return () => {
//             prevButton.removeEventListener('click', handlePrevButtonClick);
//             nextButton.removeEventListener('click', handleNextButtonClick);
//             dotsNav.removeEventListener('click', handleDotClick);
//         };
//     }, [slideWidth]);

    // const myFunction = () => {
    //     alert("please call to this number: (xxx) xxx-xxx or write to us by email: ricardop9701@example.com ");
    // };
    
    // const fun = () => {
    //     // Define your functionality here
    //     console.log('Clicked on fun button');
    // };

    return (
        <main>
            <div>
                <h1>Come Join us!</h1>
                <h1>let's help together.</h1>
                <h2>Take a look at some of our programs for the elderly citizens.</h2>
            </div>

            <div className="elder-pics">
                <div className="boxpic">
                    <img id="photoelder" className="elder-pic" src={One} alt="4" />
                    <img id="photoelder" className="elder-pic" src={Two} alt="1" />
                    <img id="photoelder" className="elder-pic secondpic" src={Three} alt="3" />
                    <img id="photoelder" className="picsize elder-pic" src={Four} alt="2" />
                    <img id="photoelder" className="picsize elder-pic" src={Five} alt="5" />
                </div>
            </div>

            
            <div className="main_square_cont">
                <div className="galery_track-container" >
                    <ul className="galery_track">
                        <li className="slide_galery current-slide">
                            <div className="slide_cont">
                                <h2>Volunteer for Senior Classes.</h2>
                                <p>Be a tutor for senior citizens. Join our staff and help us teach older adults who want to learn how to stay up to date with the advances in tech.</p>
                                <button className="join-button" >More information</button>
                            </div>
                        </li>
                        <li className="slide_galery">
                            <div className="slide_cont">
                                <h2>Help us donating.</h2>
                                <p>As a nonprofit, every dollar you give helps us continue to offer free and life-changing programs for older adults. There are a number of ways to give.</p>
                                <button className="join-button">More information</button>
                            </div>
                        </li>
                        <li className="slide_galery">
                            <div className="slide_cont">
                                <h2>Register as a Speaker.</h2>
                                <p>Be a speaker at our free seminar for older adults on techniques to avoid becoming victims of cyber-attacks and identity theft fraud.</p>
                                <button className="join-button" >More information</button>
                            </div>
                        </li>
                        <li className="slide_galery">
                            <div className="slide_cont">
                                <h2>Our Resources.</h2>
                                <p>Register for our classes and get access to our Video tutorials and our online guides to get yourself informed about the advances of today.</p>
                                <button className="join-button" >More information</button>
                            </div>
                        </li>
                        <li className="slide_galery">
                            <div className="slide_cont">
                                <h2>Follow us on our social media.</h2>
                                <p>Stay up to date with our daily activities, seminars, and events we carry out throughout the year through our social networks and our newsletter.</p>
                                <button className="join-button" >More information</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="elder-pics">
                <div className="boxpic">
                    <img id="photoelder" className="elder-pic" src={Six} alt="4" />
                    <img id="photoelder" className="elder-pic" src={Seven} alt="1" />
                    <img id="photoelder" className="elder-pic secondpic" src={Eight} alt="3" />
                    <img id="photoelder" className="picsize elder-pic" src={Nine} alt="2" />
                    <img id="photoelder" className="picsize elder-pic" src={Ten} alt="5" />
                </div>
            </div>
        </main>
    );
}

export default ElderPrograms;
