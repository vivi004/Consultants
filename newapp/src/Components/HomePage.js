import React from 'react';
import '../Css/HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
  // Sample data for ads or additional content
  const ads = [
    {
      id: 1,
      title: 'Ad Title 1',
      description: 'Description of Ad 1',
      imageUrl: '',
      link: '/ad1-details'
    },
    {
      id: 2,
      title: 'Ad Title 2',
      description: 'Description of Ad 2',
      imageUrl: 'https://example.com/ad2.jpg',
      link: '/ad2-details'
    }
  ];

  return (
    <div className="green">
      <p>Welcome to OVERSEAS Consultant</p>

      <div className="ads-container">
        {ads.map(ad => (
          <div key={ad.id} className="ad-item">
            <h3>{ad.title}</h3>
            <img src={ad.imageUrl} alt={ad.title} />
            <p>{ad.description}</p>
            <a href={ad.link}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
