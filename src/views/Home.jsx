import React from "react";
import Typewriter from 'typewriter-effect';

export const Home = () => {
  return (
    <div className="flex justify-center flex-col gap-2">
      <p className="text-white font-poppins text-3xl md:text-5xl font-semibold">
        Hi there,
      </p>
      <p className="text-white font-poppins text-3xl md:text-5xl font-semibold">
        <Typewriter
          options={{
            autoStart: true,
            pauseFor: 3000,
            delay: 200,
            deleteSpeed: 200
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`I'm Sergio Gonzalez`)
              .pauseFor(2500)
              .deleteChars(20)
              .typeString(`Front-End Developer`)
              .pauseFor(1000)
              .deleteChars(20)
              .typeString(`I'm Sergio Gonzalez`)
              .start();
          }}
        />
      <p className="opacity-0">Front-End Developer    </p>
      </p>

      <a
        href="https://drive.google.com/file/d/1iS7EJGiA5CF4J8bzvg75Si41c-ZXrCIb/view"
        className="
          flex 
          -mt-7
          sm:-mt-8
          md:-mt-10
          justify-center 
          items-center 
          gap-10 
          bg-main-blue 
          w-40
          h-8 rounded-3xl px-3 py-5 font-bold cursor-pointer z-10"
      >
        Download CV
      </a>

      <div 
        className="
          w-full 
          left-0 
          absolute
          bottom-0 
          flex
          items-center 
          justify-center 
          arrow">
        <svg
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          width={50}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
          />
        </svg>
      </div>
    </div>
  );
};
