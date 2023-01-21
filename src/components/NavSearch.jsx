import React from "react";

export default function NavSearch() {
  return (
    <header className="flex w-full p-5 justify-between">
      {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="text-white text-4xl">
          Movie<span className="text-orange-500">Corn.</span>
        </p>
      </div>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Search movie here..."
          className="placeholder:italic text-4xl rounded-lg"
        />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center text-sm text-white cursor-pointer">
        <p className="hover:text-orange-500 text-lg">About Us</p>
        <p className="hover:text-orange-500 hover:text-underline text-lg">
          Contact
        </p>
      </div>
    </header>
  );
}
