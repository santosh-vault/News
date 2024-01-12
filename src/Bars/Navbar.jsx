import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-gray-100 flex flex-col justify-center items-center p-5 shadow-lg'>
      <a href="" className='text-center mb-2 font-bold text-xl'>Swatta Khabar</a>
      <p className='bg-green-500 min-w-20 h-0.5'></p>
      <nav className=' flex justify-center'>
        <ul className="flex gap-x-8 mt-2">
          <li><a href="#" className=" hover:gray-500 text-2sm font-semibold">  Home</a>      </li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Samachar</a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Business</a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Entartainment</a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Life</a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Blog </a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> International </a></li>
          <li><a href="/about" className=" gray-800 hover:gray-500 text-2sm "> Sports </a></li>

        </ul>

      </nav>
    </div>
  );
}

export default Navbar;
