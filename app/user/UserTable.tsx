import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type UserTypes = {
  id: number;
  name: String;
  email: String;
};

type PropType = {
  sortOrder: String;
};

const UserTable = async ({ sortOrder }: PropType) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserTypes[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/user?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/user?sortOrder=email">email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
