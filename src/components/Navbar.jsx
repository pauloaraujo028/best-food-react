import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

import userIcon from "../assets/images/user-icon.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-black">
      {/* Left Side */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer bg-white rounded-md"
        >
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Food</span>
          </h1>
        </Link>
      </div>

      {/* Left Side */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Pesquisar lanche..."
        />
      </div>

      {/* Cart button */}
      {/* <div className='flex'>
        <a href="/cart">
          <button className='bg-black text-white hidden md:flex md:ml-2 items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2' /> Carrinho
          </button>
        </a>
        <div className='w-[40px] ml-2 hidden md:flex'>
          <img src={userIcon} alt="User" />
        </div>
      </div> */}

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <a href="/">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery size={25} className="mr-4" /> Pedidos
              </li>
            </a>
            <a href="/favorites">
              <li className="text-xl py-4 flex">
                <MdFavorite size={25} className="mr-4" /> Favoritos
              </li>
            </a>
            <a href="/">
              <li className="text-xl py-4 flex">
                <FaWallet size={25} className="mr-4" /> Carteira
              </li>
            </a>
            <a href="/">
              <li className="text-xl py-4 flex">
                <AiFillTag size={25} className="mr-4" /> Promoções
              </li>
            </a>
            <a href="/">
              <li className="text-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4" /> Convide amigos
              </li>
            </a>
            <a href="/">
              <li className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" /> Ajuda
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
