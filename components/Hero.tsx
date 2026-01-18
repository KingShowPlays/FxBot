"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-advance function
  const nextSlideAuto = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlideAuto();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlideAuto]);

  const nextSlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Resume auto-play after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Resume auto-play after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setCurrentSlide(index);
    // Resume auto-play after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
              }}
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
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Progress bar for current slide */}
            {index === currentSlide && isAutoPlaying && (
              <div 
                className="h-full bg-white/80 rounded-full animate-pulse"
                style={{
                  animation: 'progress 10s linear infinite'
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hero;