
import React from 'react';

const ProductShowcase = () => {
  const products = [
    // Top row
    {
      name: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=1011&ixlib=rb-4.0.3"
    },
    {
      name: "Strawberry Cake",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=965&ixlib=rb-4.0.3"
    },
    {
      name: "Butterscotch Cake",
      image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=1292&ixlib=rb-4.0.3"
    },
    {
      name: "Custom Cake",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=912&ixlib=rb-4.0.3"
    },
    // Bottom row
    {
      name: "Brownies",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3"
    },
    {
      name: "Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3"
    },
    {
      name: "Cupcakes",
      image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&q=80&w=986&ixlib=rb-4.0.3"
    },
    {
      name: "Macarons",
      image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80&w=1009&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="product-showcase" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Your Favourite</h2>
          <p className="section-subtitle">Try our best</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium font-serif text-lg md:text-xl">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
