import React from "react";
import "../styles/Mobile.css";

const Mobile = () => {
  return (
    <section className="app-promo" id="mobileapp">
      <div className="promo-content">
        <div className="app-icon-container">
          <img
            src="/images/appIcon.png"
            alt="JavaCup App Icon"
            className="app-icon"
          />
        </div>
        <h2>Get the Java Cup App</h2>
        <p>Order ahead, earn rewards, and enjoy your favorite coffee anytime — all from your phone.</p>
        <div className="store-buttons">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/playStore.png" alt="Get it on Google Play" />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/appStore.png" alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
