import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="93084792"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.39}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="49538094897"
            title="Kenwood kMix Stand Mixer for 
            Baking, Stylish Kitchen Mixer with
            K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            rating={4}
            image="https://m.media-amazon.com/images/I/61csqLd5hnL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850754"
            title="Samsung Galaxy Watch Active (40MM, GPS, Bluetooth) Smart Watch with Fitness Tracking, and Sleep Analysis - Rose Gold  (US Version)"
            price={199.49}
            rating={3}
            image="https://m.media-amazon.com/images/I/61n1c2vnPJL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={24.79}
            rating={5}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1029}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={1999.89}
            rating={3}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
