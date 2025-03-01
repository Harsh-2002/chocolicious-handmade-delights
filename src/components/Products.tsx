
import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('signature');
  
  const categories = [
    { id: 'signature', name: 'Signature Cakes' },
    { id: 'custom', name: 'Custom Designs' },
    { id: 'desserts', name: 'Other Desserts' },
    { id: 'multilayer', name: 'Multi-layer Cakes' },
  ];
  
  const products = {
    signature: [
      {
        id: 1,
        name: 'Classic Chocolate',
        description: 'Rich chocolate cake with smooth ganache frosting',
        price: 399,
        unit: '500g',
        image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=1011&ixlib=rb-4.0.3'
      },
      {
        id: 2,
        name: 'Photo Cake',
        description: 'Personalized cake with your photo printed on edible paper',
        price: 599,
        unit: '500g',
        image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=988&ixlib=rb-4.0.3'
      },
      {
        id: 3,
        name: 'Strawberry Delight',
        description: 'Moist chocolate cake topped with fresh strawberries',
        price: 449,
        unit: '500g',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=965&ixlib=rb-4.0.3'
      },
      {
        id: 4,
        name: 'Butterscotch Dream',
        description: 'Soft butterscotch cake with caramel drizzle',
        price: 429,
        unit: '500g',
        image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=1292&ixlib=rb-4.0.3'
      }
    ],
    custom: [
      {
        id: 5,
        name: 'Birthday Special',
        description: 'Custom designed cakes for birthday celebrations',
        price: 699,
        unit: '1kg',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=912&ixlib=rb-4.0.3'
      },
      {
        id: 6,
        name: 'Wedding Cake',
        description: 'Elegant multi-tier cakes for your special day',
        price: 1999,
        unit: '2kg',
        image: 'https://images.unsplash.com/photo-1623428454614-abaf7ee96d01?auto=format&fit=crop&q=80&w=988&ixlib=rb-4.0.3'
      },
      {
        id: 7,
        name: 'Anniversary Cake',
        description: 'Romantic designs to celebrate your love',
        price: 799,
        unit: '1kg',
        image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3'
      },
      {
        id: 8,
        name: 'Festival Special',
        description: 'Themed cakes for festivals and celebrations',
        price: 649,
        unit: '750g',
        image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=1010&ixlib=rb-4.0.3'
      }
    ],
    desserts: [
      {
        id: 9,
        name: 'Chocolate Brownies',
        description: 'Fudgy brownies with chocolate chunks',
        price: 199,
        unit: 'Box of 6',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3'
      },
      {
        id: 10,
        name: 'Butter Cookies',
        description: 'Crispy, melt-in-mouth cookies',
        price: 149,
        unit: 'Pack of 8',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3'
      },
      {
        id: 11,
        name: 'Cupcakes',
        description: 'Assorted flavored cupcakes with frosting',
        price: 249,
        unit: 'Box of 6',
        image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&q=80&w=986&ixlib=rb-4.0.3'
      },
      {
        id: 12,
        name: 'Macarons',
        description: 'Delicate French macarons in various flavors',
        price: 299,
        unit: 'Box of 8',
        image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80&w=1009&ixlib=rb-4.0.3'
      }
    ],
    multilayer: [
      {
        id: 13,
        name: '2-Layer Chocolate',
        description: 'Double-layered chocolate cake with ganache',
        price: 799,
        unit: '1kg',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1089&ixlib=rb-4.0.3'
      },
      {
        id: 14,
        name: '3-Layer Celebration',
        description: 'Triple-layered cake for special celebrations',
        price: 1299,
        unit: '1.5kg',
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?auto=format&fit=crop&q=80&w=1036&ixlib=rb-4.0.3'
      },
      {
        id: 15,
        name: '4-Layer Extravaganza',
        description: 'Four-layered cake for grand celebrations',
        price: 1799,
        unit: '2kg',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3'
      },
      {
        id: 16,
        name: 'Mini Layered Cake',
        description: '2-layer personal sized celebration cake',
        price: 399,
        unit: '400g',
        image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=1292&ixlib=rb-4.0.3'
      }
    ]
  };
  
  return (
    <section id="products" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Our Delicious Offerings</h2>
          <p className="section-subtitle">
            Handcrafted with premium ingredients for an unforgettable taste experience
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-chocolate-600 hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products[activeCategory as keyof typeof products].map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-scale-in"
              style={{ animationDelay: `${(product.id % 4) * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-chocolate-800">
                  ₹{product.price}/{product.unit}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < 4 ? "fill-gold-400 text-gold-400" : "text-muted-foreground"}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.0</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-chocolate-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button className="w-full bg-muted hover:bg-muted/80 text-chocolate-700 font-medium py-2 rounded-lg flex items-center justify-center transition-colors">
                  Order Now 
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
