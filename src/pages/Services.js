import React from 'react';
import './Services.css'; // Import the custom CSS for hover effects
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Services = () => {
  const services = [
    {
      price: '$99',
      duration: '1 hour',
      title: 'BASIC',
      features: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance'],
      buttonText: 'GET APPOINTMENT',
      styleClass: 'basic'
    },
    {
      price: '$199',
      duration: '2 hour',
      title: 'STANDARD',
      features: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance'],
      buttonText: 'GET APPOINTMENT',
      styleClass: 'standard'
    },
    {
      price: '$299',
      duration: '3 hour',
      title: 'EXTENDED',
      features: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance'],
      buttonText: 'GET APPOINTMENT',
      styleClass: 'extended'
    },
    {
      price: '$399',
      duration: '5 hour',
      title: 'ULTIMATE',
      features: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance'],
      buttonText: 'GET APPOINTMENT',
      styleClass: 'ultimate'
    }
  ];

  return (
    <div className="services-section container text-center">
      <h2 className="mb-4">Service & Optimal Price</h2>
      <p className="text-muted mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className={`pricing-card ${service.styleClass}`}>
              <div className="pricing-header">
                <h3>{service.price}</h3>
                <p>{service.duration}</p>
              </div>
              <div className="pricing-body">
                <h4>{service.title}</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">{service.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
