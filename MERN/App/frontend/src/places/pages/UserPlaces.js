import React from 'react';
import { useParams } from 'react-router-dom';

// import './UserPlaces.css';
import PlaceList from '../components/PlaceList';
import { useEffect, useContext } from 'react';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useState } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

// const DUMMY_PLACES = [
//   {
//     id: "p1",
//     title: "Empire State Building",
//     description: "One of the most famous sky scrapers in the world",
//     imageUrl:
//       "https://imgs.6sqft.com/wp-content/uploads/2014/07/21041607/NYC_Empire_State_Building.jpg",
//     address: "20 W 34th St, New York, NY 10001",
//     location: {
//       lat: 40.7484405,
//       lng: -73.9878531,
//     },
//     creator: "u1",
//   },
//   {
//     id: "p2",
//     title: "Emp. State Building",
//     description: "One of the most famous sky scrapers in the world",
//     imageUrl:
//       "https://imgs.6sqft.com/wp-content/uploads/2014/07/21041607/NYC_Empire_State_Building.jpg",
//     address: "20 W 34th St, New York, NY 10001",
//     location: {
//       lat: 40.7484405,
//       lng: -73.9878531,
//     },
//     creator: "u2",
//   },
// ];

const UserPlaces = (props) => {
  // const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState(null);

  const userId = useParams().userId;

  // const userId = auth.userId;

  useEffect(() => {
    const fetchPlaces = async (event) => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        // console.log(responseData);
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeleteHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler} />
      )}
    </>
  );
};

export default UserPlaces;
