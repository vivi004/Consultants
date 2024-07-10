import React from 'react';
import { Carousel } from 'react-bootstrap';  // Import Carousel from react-bootstrap
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/HomePage.css'; // Import your CSS file for styling
import top from '../Assets/Images/top.jpg'
import image1 from '../Assets/Images/two.png';
import image2 from '../Assets/Images/twog.png';
import i3 from '../Assets/Images/two.png';  // Make sure to import i3 if it's used here

const HomePage = () => {
  const arrowStyles = {
    fontSize: '0px',
    color: 'transparent',
    borderRadius: '50%', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease',
  };

  return (
    <>
      <Navbar />
      {/* Example of using image1 in an img tag */}
      <img className='top' src={top} alt='none' />
      <div>
      <h3 className='center'>Our Branches</h3>
      </div>
      <Carousel 
      interval={2000} 
        nextIcon={<span style={arrowStyles}>&gt;</span>} 
        prevIcon={<span style={arrowStyles}>&lt;</span>}
      >
        <Carousel.Item>
          <img src={image1} alt="none" style={{ width: '100%', height: '90vh' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="mon" style={{ width: '100%', height: '90vh' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={i3} alt="none" style={{ width: '100%', height: '90vh' }} />
        </Carousel.Item>
      </Carousel>

<Footer/>


    </>
  );
}

export default HomePage;
