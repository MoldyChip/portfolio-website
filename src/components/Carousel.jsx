import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import Modal from './Modal';

export default function Carousel({ data, vgdClicked, tenmoClicked, candyClicked, priceClicked }) {
    const [slide, setSlide] = useState(0);
    const [isVGDOpen, setIsVGDOpen] = useState(false);
    const [isTenmoOpen, setIsTenmoOpen] = useState(false);
    const [isCandyOpen, setIsCandyOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);


    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    const closeModals = () => {
        setIsTenmoOpen(false);
        setIsCandyOpen(false);
        setIsVGDOpen(false);
        setIsPriceOpen(false);
    };

    function isClicked() {
        if (vgdClicked) {
            setIsVGDOpen(true);
        }
        else if (tenmoClicked) {
            setIsTenmoOpen(true);
        }
        else if (candyClicked) {
            setIsCandyOpen(true);
        }
        else if (priceClicked) {
            setIsPriceOpen(true);
        }
    }

    return (
        <>
            <div className='carousel'>
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
                {data.map((item, index) => (
                    <img onClick={() => { isClicked() }} className={slide === index ? "slide" : "slide-hidden"} src={item.src} id={item.id} key={index} />
                ))}
                <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
                <span className='indicators'>
                    {data.map((_, index) => {
                        return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                    })}
                </span>
            </div>
            {isVGDOpen && (
                <Modal open={isVGDOpen} onClose={closeModals}>
                    <div className="carousel">
                        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                        {data.map((item, index) => (
                            <img style={{ height: "auto", width: "100%" }} className={slide === index ? 'slide' : 'slide-hidden'} src={item.src} id={item.id} key={index} />
                        ))}
                        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                        <span className="indicators">
                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSlide(index)}
                                        className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
                                    ></button>
                                );
                            })}
                        </span>
                    </div>
                </Modal>
            )}
            {isTenmoOpen && (
                <Modal open={isTenmoOpen} onClose={closeModals}>
                    <div className="carousel">
                        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                        {data.map((item, index) => (
                            <img style={{ height: "auto", width: "100%" }} className={slide === index ? 'slide' : 'slide-hidden'} src={item.src} id={item.id} key={index} />
                        ))}
                        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                        <span className="indicators">
                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSlide(index)}
                                        className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
                                    ></button>
                                );
                            })}
                        </span>
                    </div>
                </Modal>
            )}
            {isCandyOpen && (
                <Modal open={isCandyOpen} onClose={closeModals}>
                    <div className="carousel">
                        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                        {data.map((item, index) => (
                            <img style={{ height: "auto", width: "100%" }} className={slide === index ? 'slide' : 'slide-hidden'} src={item.src} id={item.id} key={index} />
                        ))}
                        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                        <span className="indicators">
                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSlide(index)}
                                        className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
                                    ></button>
                                );
                            })}
                        </span>
                    </div>
                </Modal>
            )}
            {isPriceOpen && (
                <Modal open={isPriceOpen} onClose={closeModals}>
                    <div className="carousel">
                        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                        {data.map((item, index) => (
                            <img style={{ height: "auto", width: "100%" }} className={slide === index ? 'slide' : 'slide-hidden'} src={item.src} id={item.id} key={index} />
                        ))}
                        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                        <span className="indicators">
                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSlide(index)}
                                        className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
                                    ></button>
                                );
                            })}
                        </span>
                    </div>
                </Modal>
            )}
        </>)
}