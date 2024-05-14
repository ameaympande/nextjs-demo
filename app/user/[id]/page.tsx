import React from "react";

type props = {
  params: { id: number };
};

const UserDetails = ({ params: { id } }: props) => {
  return <div>UserDetails {id}</div>;
};

export default UserDetails;
