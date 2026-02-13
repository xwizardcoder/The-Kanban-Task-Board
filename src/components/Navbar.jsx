
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="top flex flex-wrap gap-4 justify-between bg-purple-700 w-full min-h-[60px] items-center px-4 md:px-10">
          <span className="left-top-menu">
            <img src="./app.png" alt="" className="w-[30px] h-[30px] invert-100" />
          </span>

          <div className="input flex items-center border p-2 rounded bg-white gap-2 w-full md:w-auto">
            <img src="./search.png" alt="" className="w-[20px] h-[20px]" />
            <input
              type="text"
              placeholder="search"
              className="w-full md:w-[50vw] min-h-[30px] text-black placeholder-gray-500 outline-none rounded"
            />
          </div>

          <div className="create-button">
            <button className="text-white bg-purple-400 p-2 rounded w-[100px] hover:bg-purple-500">
              Create
            </button>
          </div>

          <div className="right-top-menu">
            <ul className="flex gap-4">
              <li><img src="./marketing.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
              <li><img src="./bell.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
              <li><img src="./user.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
            </ul>
          </div>
        </div>

        <div className="bottom flex justify-between bg-purple-600 w-full min-h-[60px] items-center px-4 md:px-10">
          <span className="left-bottom-menu">
            <h1 className="text-white font-bold text-sm md:text-base">
              The Kanban Task Board
            </h1>
          </span>

          <div className="right-bottom-menu">
            <ul className="flex gap-4">
              <li><img src="./star.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
              <li><img src="./sort.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
              <li><img src="./rocket.png" alt="" className="w-[20px] h-[20px] invert-100" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar



