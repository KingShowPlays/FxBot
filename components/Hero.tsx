"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1566207462754-97c86c31db3d?w=1920&h=1080&fit=crop',
      title: 'Zee Water',
      description: 'Zee Water is a water brand committed to producing purified water that prioritizes health, safety, and environmental well-being.'
    },
    {
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=1920&h=1080&fit=crop',
      title: 'Innovation First',
      description: 'Leading the industry with cutting-edge technology and sustainable practices for a better tomorrow.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
      title: 'Quality Assured',
      description: 'Every drop is tested and purified to meet the highest standards of quality and safety.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-end pb-20 px-6">
              <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-2xl">
                  <h1 className="text-white text-5xl md:text-6xl font-light mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;