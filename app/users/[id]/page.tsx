"use client";
import {
  notFound,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import React from "react";

type props = {
  params: { id: number };
};

const UserDetails = () => {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  if (params.id > 10) notFound();
  return (
    <>
      <div>UserDetails {params.id}</div>
      <div>pathname {pathname}</div>
      <div>search {search}</div>
    </>
  );
};

export default UserDetails;
