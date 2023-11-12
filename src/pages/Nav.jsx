import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-col fixed h-screen w-1/6 bg-black text-gray-400">
        <p className="font-bold text-4xl text-center text-white p-5">
          Dashboard
        </p>
        <NavLink className="text-xl" to="/">
          <i className="fa-solid fa-house pl-10 m-5"></i>Overview
        </NavLink>
        <NavLink className="text-xl" to="sale">
          <i className="fa-solid fa-file pl-11 m-5"></i>Sales Report
        </NavLink>
        <NavLink className="text-xl" to="inventory">
          <i className="fa-solid fa-warehouse pl-10 m-5"></i>Inventory
        </NavLink>
        <NavLink className="text-xl" to="customer">
          <i className="fa-solid fa-users pl-10 m-5"></i>Customers
        </NavLink>
      </nav>
      <div className="flex mx-8 pt-8 pl-80 justify-between items-center text-2xl">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="flex gap-8">
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
