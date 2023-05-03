import React from 'react';
import '../style.css';
import './Landing.css';

const Landing = () => {
  return (
    <main className="container">
      <section className="hero p-5">
        <div>
          <h1>Your Property Data in one spot</h1>
        </div>
        <a href="/signup" className="btn btn-primary">
          Let's go
        </a>
      </section>
    </main>
  );
};

export default Landing;
