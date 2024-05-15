import { notFound } from "next/navigation";
import React from "react";

type props = {
  params: { id: number };
};

const UserDetails = ({ params: { id } }: props) => {
  if (id > 10) notFound();
  return <div>UserDetails {id}</div>;
};

export default UserDetails;
