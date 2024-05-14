import React from "react";
import UserTable from "./UserTable";

type PropType = {
  searchParams: { sortOrder: String };
};
const userPage = async ({ searchParams: { sortOrder } }: PropType) => {
  return (
    <>
      <div className="p-4">
        <p className="text-2xl font-bold p-4">Users</p>
        <UserTable sortOrder={sortOrder} />
      </div>
    </>
  );
};

export default userPage;
