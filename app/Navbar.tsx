import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-200 p-4">
      <div>
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/users">Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
