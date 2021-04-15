import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div id="home__top" className="home__container">
      <div className="home__carousel">
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
            alt="Home"
          />
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
            alt="Home"
          />
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3154_SVOD_DiamondFallBack_Nov/Amazon_GW_DesktopTallHero_RB-3154_SVOD_DiamondFallBack_Nov_1500x600._CB418721851_.jpg"
            alt="Home"
          />
           <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
            alt="Home"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          ></Product>
          {/* <Product id="4953804"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}>
            </Product> */}
          <Product
            id="4953804"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="https://m.media-amazon.com/images/I/71AOHDnKgML._AC_UL320_.jpg"
            rating={4}
          ></Product>
        </div>
        <div className="home__row">
        <Product
            id="490385330"
            title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery"
            price={399.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg"
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
          <Product
            id="6203848"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            price={114.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
        <Product
            id="127821341"
            title="Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic Bronze (US Version)"
            price={169.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71bkS3VmJnL._AC_SL1500_.jpg"
          />
          <Product
            id="494548094"
            title="JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition"
            price={45.46}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
          />
          <Product
            id="495380114"
            title="Breville BES870XL Barista Express Espresso Machine, Brushed Stainless Steel"
            price={599.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81RfdzPfrQL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="159756362"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
            id="7229344220"
            title='LG OLED55CXPUA Alexa Built-In CX 55" 4K Smart OLED TV (2020)'
            price={1596.99}
            image="https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="82189873"
            title="Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51scO1VOfIL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="94432189"
            title="Introducing Amazon Halo – Measure body composition, activity, sleep, and tone of voice - Winter + Silver - Medium"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61-LCUkfn8L._AC_SL1002_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
