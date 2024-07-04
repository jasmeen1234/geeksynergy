import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Company from './Company';

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
    <div >
        <Company/>
    </div>
    <div className="max-w-screen-2xl  mx-auto px-4">
      
     
      

      {isLoading ? (
        <div className="text-center mt-8">
          Loading...
        </div>
      ) : error ? (
        <div className="text-center mt-8 text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {userData.map(item => (
            <div
              key={item.id}
              className="bg-white h-auto border border-gray-200 shadow-lg hover:shadow-xl duration-200 relative flex flex-col gap-4 group"
            >
              <div className="flex items-center justify-center h-96 overflow-hidden relative">
                <img
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-75"
                  src={item.poster}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg'; // Replace with your placeholder image
                  }}
                />
                <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4">
                  <h2 className="text-2xl text-gray-800 font-bold">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">
                    Genre: {item.genre}<br />
                    Director: {item.director}<br />
                    Starring: {item.stars}<br />
                    {item.language} | {new Date(item.releaseDate).toLocaleDateString()}
                  </p>
                  <p className="text-lg text-gray-600 mt-2">
                    {item.pageViews} views | voted by {item.totalVoted} people
                  </p>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 duration-200">
                    Watch Trailer
                  </button>
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
