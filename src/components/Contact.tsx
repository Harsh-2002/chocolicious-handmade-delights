
import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'standard',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderType: 'standard',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Order Your Cake Today</h2>
          <p className="section-subtitle">
            Fill out the form below to place your order or inquire about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-slide-right">
            <div className="p-8">
              <h3 className="font-serif text-2xl font-medium text-chocolate-800 mb-6">
                Get in Touch
              </h3>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-green-800 mb-2">Thank You!</h4>
                  <p className="text-green-700">
                    Your message has been submitted successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-chocolate-700 font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-chocolate-700 focus:border-caramel-400 focus:outline-none focus:ring-2 focus:ring-caramel-200"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-chocolate-700 font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-chocolate-700 focus:border-caramel-400 focus:outline-none focus:ring-2 focus:ring-caramel-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-chocolate-700 font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-chocolate-700 focus:border-caramel-400 focus:outline-none focus:ring-2 focus:ring-caramel-200"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="orderType" className="block text-chocolate-700 font-medium">
                      Order Type
                    </label>
                    <select
                      id="orderType"
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-chocolate-700 focus:border-caramel-400 focus:outline-none focus:ring-2 focus:ring-caramel-200"
                    >
                      <option value="standard">Standard Cake</option>
                      <option value="custom">Custom Design</option>
                      <option value="birthday">Birthday Special</option>
                      <option value="wedding">Wedding Cake</option>
                      <option value="corporate">Corporate Order</option>
                      <option value="other">Other Desserts</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-chocolate-700 font-medium">
                      Order Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your order including cake flavor, size, and any special instructions..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-chocolate-700 focus:border-caramel-400 focus:outline-none focus:ring-2 focus:ring-caramel-200"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Order Request
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-left">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="font-serif text-2xl font-medium text-chocolate-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-caramel-100 text-caramel-600 mt-1">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-800 mb-1">Phone</h4>
                    <p className="text-chocolate-600">+91 98765 43210</p>
                    <p className="text-chocolate-600">+91 91234 56789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-caramel-100 text-caramel-600 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-800 mb-1">Email</h4>
                    <p className="text-chocolate-600">orders@tastycakes.com</p>
                    <p className="text-chocolate-600">info@tastycakes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-caramel-100 text-caramel-600 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-chocolate-800 mb-1">Address</h4>
                    <p className="text-chocolate-600">
                      123 Sweet Street, Jogeshwari West,<br />
                      Mumbai, Maharashtra 400102
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <iframe
                title="Tasty Cakes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.716557419564!2d72.83583622542728!3d19.136980839253416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c8782e5821%3A0x79ff7a521c8d8195!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651815204089!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="bg-chocolate-800 rounded-2xl shadow-md p-8 text-white">
              <h3 className="font-serif text-2xl font-medium mb-4">
                Business Hours
              </h3>
              
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
                  { day: 'Sunday', hours: '10:00 AM - 6:00 PM' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-chocolate-700 last:border-0">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
