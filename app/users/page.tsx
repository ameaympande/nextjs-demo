import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

type PropType = {
  searchParams: { sortOrder: String };
};
const userPage = async ({ searchParams: { sortOrder } }: PropType) => {
  return (
    <>
      <div className="p-4">
        <h1>Users</h1>
        <Link href="/users/new" className="btn ">
          New User
        </Link>
        <UserTable sortOrder={sortOrder} />
      </div>
    </>
  );
};

export default userPage;
