
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Desai',
    comment: "The chocolate cake from Tasty Cakes was absolutely divine! Moist, rich, and not too sweet. Everyone at my daughter's birthday party loved it. Will definitely order again!",
    rating: 5,
    location: 'Andheri, Mumbai'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    comment: "I ordered a custom photo cake for my parents' anniversary. Not only was it beautiful, but it tasted amazing too! The delivery was prompt and the cake was fresh. Highly recommend!",
    rating: 5,
    location: 'Goregaon, Mumbai'
  },
  {
    id: 3,
    name: 'Neha Singh',
    comment: "Being vegetarian, it's always a challenge to find good eggless cakes. Tasty Cakes exceeded my expectations - their butterscotch cake was exceptional and no one could tell it was eggless!",
    rating: 4,
    location: 'Malad, Mumbai'
  },
  {
    id: 4,
    name: 'Amit Patel',
    comment: "The attention to detail on my wedding cake was remarkable. The 3-tier chocolate cake not only looked stunning but tasted heavenly. Thank you for making our special day even more memorable!",
    rating: 5,
    location: 'Borivali, Mumbai'
  },
  {
    id: 5,
    name: 'Sanjana Sharma',
    comment: "I've tried many bakeries in Mumbai, but Tasty Cakes' brownies are the best I've ever had! Perfect texture with the right amount of chocolate chips. My family's new favorite!",
    rating: 5,
    location: 'Jogeshwari, Mumbai'
  }
];

const Testimonials = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            We take pride in creating memorable experiences through our delicious creations
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full z-10">
            <button 
              onClick={movePrev} 
              className={`p-2 bg-white rounded-full shadow-md text-chocolate-700 hover:text-caramel-500 transition-all ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={moveNext} 
              className={`p-2 bg-white rounded-full shadow-md text-chocolate-700 hover:text-caramel-500 transition-all ${
                carousel.current && carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
                  ? 'opacity-50 cursor-not-allowed'
                  : 'opacity-100'
              }`}
              disabled={
                carousel.current &&
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
              }
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div 
            ref={carousel} 
            className="carousel flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-6 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="snap-start flex-shrink-0 w-full md:w-1/2 lg:w-1/3 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 border border-cream-100 h-full flex flex-col">
                  <div className="mb-4 text-caramel-400">
                    <Quote size={32} />
                  </div>
                  <p className="text-chocolate-700 flex-grow mb-6">
                    {testimonial.comment}
                  </p>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-300'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-serif text-lg font-medium text-chocolate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-chocolate-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
