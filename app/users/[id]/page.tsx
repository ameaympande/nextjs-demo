"use client";
import {
  notFound,
  useParams,
  usePathname,
  useSearchParams,
  redirect
} from "next/navigation";
import React from "react";

const UserDetails = () => {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const userId = Number(params.id);

  if (isNaN(userId) || userId > 10) notFound();

  if(userId <= 5) redirect("/")

  return (
    <>
      <div>UserDetails {params.id}</div>
      <div>pathname {pathname}</div>
      <div>search {search}</div>
    </>
  );
};

export default UserDetails;
