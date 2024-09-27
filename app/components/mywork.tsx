'use client'
import React, { useEffect, useState } from "react";

const images = ['/image/bg1.png', '/image/bg2.png', '/image/bg.png'];

export default function MyWork() {
    const [currentImage, setCurrentImage] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    return (
        <div className="relative w-full px-10 bg-gray-700 bg-opacity-50">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
                <div className="carousel relative h-full">
                    {images.map((img, index) => (
                        <div
                            key={img}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={prevSlide}
                >
                    &#8592;
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={nextSlide}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}
