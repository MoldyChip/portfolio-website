import React, {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

export default function Carousel ({data, setIsVGDOpen, setIsCandyOpen, setIsTenmoOpen, styleProp, vgdClicked, tenmoClicked, candyClicked}) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    function isClicked() {
        if (vgdClicked) {
            return setIsVGDOpen(true);
        }
        else if (tenmoClicked) {
            return setIsTenmoOpen(true);
        }
        else if (candyClicked) {
            return setIsCandyOpen(true);
        }
    }

    return (
        <div className='carousel'>
          <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
          {data.map((item, index) => (
            <img onClick={() => {isClicked()}} style={styleProp}  className={slide === index ? "slide" : "slide-hidden"} src={item.src} id={item.id} key={index} />
          ))}
          <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
          <span className='indicators'> 
            {data.map((_, index) => {
                return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
            })}
          </span>
        </div>
    )       
}