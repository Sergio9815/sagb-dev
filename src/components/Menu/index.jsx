import React, { useState } from "react";
import { Links } from "../Links/index";
import anime from 'animejs/lib/anime.es.js';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '.el',
      scale: [
        {value: 1.1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      loop: true
    });
  }, []);

  return (
    <div className="bg-main-background">
      <div
        className="
          hidden
          items-center
          justify-center
          gap-7
        text-white 
          font-poppins 
          text-2xl
          cursor-pointer 
          mr-20
          lg:mr-32 
          sm:flex 
          sm:flex-col"
      >
        <h4 className="el -rotate-6">{"{ Sagb }"}</h4>
        <Links />
      </div>

      <div
        className="
          text-white 
          absolute 
          top-24 
          left-0
          w-full
          flex
          items-center 
          justify-between
          sm:hidden z-30"
      >
        <h4 className="ml-10">{"{ Sagb }"}</h4>
        <button className="mr-10" onClick={handleMenu}>
          <svg
            width={30}
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>

      {showMenu && (
        <div
          className="
                absolute 
                bg-main-background
                text-white 
                left-0
                top-0 
                w-full 
                h-screen 
                flex 
                flex-col 
                items-center
                justify-center
                font-poppins
                gap-10 text-2xl z-20"
        >
          <Links />
        </div>
      )}
    </div>
  );
};
