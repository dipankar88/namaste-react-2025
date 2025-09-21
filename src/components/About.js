import React from 'react';
import '../styles/AboutUs.css';

const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Your favorite food delivered fast at your door.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At FoodSwift, we believe that good food should be just a tap away.
          We're on a mission to bring delicious meals from your favorite restaurants
          straight to your doorstep — hot, fresh, and fast.
        </p>
      </section>

      <section className="about-features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🚀 Lightning-fast delivery</li>
          <li>🍔 Wide range of restaurants</li>
          <li>💳 Secure online payments</li>
          <li>📱 User-friendly mobile app</li>
          <li>🧾 Real-time order tracking</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Who We Are</h2>
        <p>
          Founded by foodies and tech geeks, FoodSwift is built by a passionate team
          of innovators, designers, and delivery experts committed to transforming
          the way India eats.
        </p>
      </section>

      <section className="about-footer">
        <p>&copy; {new Date().getFullYear()} FoodSwift. All rights reserved.</p>
      </section>
    </div>
  );
};

export default About;