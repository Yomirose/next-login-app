import React from 'react';

const Home = () => {

  return (
    <div className="home-container">
      <header className="home-header">
        {/* {userData.firstName} {" "} */}
        {/* {userData.lastName} {" "} */}
        {/* <img src={userData.image} width="20px" alt='' /> */}
        <h1>Welcome to Our Website!</h1>
        <p>Discover our services and offerings.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="home-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>Learn more about our company and our mission to provide top-quality services.</p>
        </div>
        <div className="content-section">
          <h2>Our Services</h2>
          <p>Explore the wide range of services we offer to meet your needs.</p>
        </div>
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries or support.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;