import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div>
      <header
        className="fixed top-0 left-0 z-[100] w-full px-2 py-5 bg-my-bg 
      flex items-center justify-between drop-shadow-header-shadow"
      >
        {/* header left */}
        <div className="flex items-center gap-x-2">
          <IconButton
            sx={{
              color: "#f2f20b",
            }}
          >
            <MenuIcon
              sx={{
                color: "#0a0b0a",
                cursor: "pointer",
              }}
            />
          </IconButton>

          <h1 className="text-lg font-bold ml-2">
            ceylara.<span className="text-red-400">me</span>
          </h1>

          {/*search*/}
          <div className="flex items-center rounded-lg overflow-hidden bg-green-100 ml-2">
            <input
              type="text"
              placeholder="Search"
              style={{
                display: isSearch ? "inlie-block" : "none",
              }}
              className=" hidden sm:inline-block outline-none p-2 font-semibold 
            text-sm bg-inherit w-[200px] ml-1"
            />
            <IconButton
              sx={{
                color: "#f2f20b",
              }}
              onClick={() => setIsSearch(!isSearch)}
            >
              <YoutubeSearchedForIcon
                sx={{
                  color: "#1f1fdc",
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </div>
        </div>

        {/* header right */}
        <div className="p-[4px]">
          <IconButton
            sx={{
              color: "#f2f20b",
            }}
          >
            <div className="relative">
              <AddShoppingCartIcon
                sx={{
                  color: "#0a0b0a",
                  cursor: "pointer",
                }}
              />
              <div className="absolute t-0 w-full l-0 text-[10px] bg-black p-[2px] m-0 rounded-lg ">
                2
              </div>
            </div>
          </IconButton>
        </div>
      </header>
    </div>
  );
};

export default Header;
