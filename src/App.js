import React from 'react';
//  import logo from './logo.svg';
import './App.css';
import './Header Component/Header.css'
import Header from './Header Component/Header';

// import Navigation from './Navigation Component/Navigation';
// import './Navigation Component/Navigation.css';

import Trend from './Trend Component/Trend'; 
import'./Trend Component/Trend.css';
import Clothing from './Clothing Component/Clothing';
import './Clothing Component/Clothing.css';
import Shopping from './Shopping Component/Shopping';
import './Shopping Component/Shopping.css';
import  Shipping from './Shipping Component/Shipping';
import './Shipping Component/Shipping.css';
import Book from './LookBook Component/Book';
import './LookBook Component/Book.css';

//  import Photography from './Photography Component/Photography';
//  import './Photography Component/Photography.css';

  import Testimonial from './Testimonial Component/Testimonial';
  import './Testimonial Component/Testimonial.css';

import Footer from './Footer Component/Footer';
import './Footer Component/Footer.css';






// import logo from './header-logo.png';
// import image1 from './Trend Component/images/image-1.jpeg';

// import Trend from './ Trend-Component/Trends';
// import './Trends.css';

// import  'header-image.jpeg';


function App() {
  return (
    <div className="App">
    <Header />
    {/* <Navigation /> */}
    <Trend />
    <Clothing />
    <Shopping />
    <Shipping />
     {/* <Photography />  */}
     <Testimonial /> 
    <Book />
    <Footer />

  </div>
   
  );
}

export default App;








