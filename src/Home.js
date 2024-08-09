import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-digital-retailing-illustration-laptop-keyboard-with-shopping-basket-and-e-commerce-image_3903657.jpg"
            alt=""
          />
  
          <div className="home__row">
            <Product
              id="12321341"
              title="Apple 2022 MacBook Air laptop with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage, backlit keyboard, 1080p FaceTime HD camera."
              price={11.96}
              rating={5}
              image="https://cdn.wccftech.com/wp-content/uploads/2023/06/MacBook-Air-3-e1686685181377.jpg"
            />
            <Product
              id="4903850"
              title="IFOLO Smart Watch for Men Women with 1.4 Touch Screen, Activity Fitness Tracker Heart Rate Sleep Monitor, 5ATM Waterproof Pedometer Smartwatch Step Counter for Android iOS Phone"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            
          </div>
  
          <div className="home__row">
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
  
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;