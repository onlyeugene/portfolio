import React from "react";
import Search from "./search";
import UserButtons from "./user-buttons";
import UserRoutes from "./user-routes";

const Header = () => {
  return (
    <div className="border-b py-2 px-10 pr-48 bg-[#1c1c1c] flex fixed min-w-full gap-5 justify-between">
      <div>
      <UserRoutes />
      </div>
     <div className="flex items-center gap-4">
     <UserButtons />
     <Search />
     </div>
    </div>
  );
};

export default Header;
