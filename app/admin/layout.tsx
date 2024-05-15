import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const adminLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <aside className="bg-slate-200 p-5 mr-3">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default adminLayout;
