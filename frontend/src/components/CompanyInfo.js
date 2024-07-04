import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Company from './Company';
import './CompanyInfo.css'; // Import your CSS file for CompanyInfo

export default function CompanyInfo() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.post('https://hoblist.com/api/movieList/', {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    })
    .then(response => {
      console.log(response);
      setUserData(response.data.result);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      setIsLoading(false);
    });
  };

  return (
    <>
      <Company />
      <div className="company-info-container">
        {isLoading ? (
          <div className="text-center mt-8">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center mt-8 text-red-500">
            Error: {error}
          </div>
        ) : (
          <div className="movie-grid">
            {userData.map(item => (
              <div
                key={item.id}
                className="movie-item"
              >
                <div className="movie-card">
                  <div className="movie-image-container">
                    <img
                      className="movie-poster"
                      src={item.poster}
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg'; // Replace with your placeholder image
                      }}
                    />
                    <div className="movie-details-overlay">
                      <h2 className="movie-title">{item.title}</h2>
                      <p className="movie-info">
                        Genre: {item.genre}<br />
                        Director: {item.director}<br />
                        Starring: {item.stars}<br />
                        {item.language} | {new Date(item.releaseDate).toLocaleDateString()}
                      </p>
                      <p className="movie-info">
                        {item.pageViews} views | voted by {item.totalVoted} people
                      </p>
                      <button className="watch-trailer-btn">
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
