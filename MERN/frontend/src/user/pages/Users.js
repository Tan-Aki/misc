import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tan Jul",
      image: "https://cdn.pixabay.com/photo/2015/10/01/20/28/animal-967657_1280.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
