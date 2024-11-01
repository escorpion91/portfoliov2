import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Juan Manuel
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        React, Django and Python Dev
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        A passionate Web developer/Python coder. Very eager to build things,
        whether in web development (React, Django and WordPress mainly) or
        solving tasks with Python. I’m always opened to learning new things and
        take on new challenges. Currently learning ThreeJs and React Three
        Fiber.
      </p>
    </div>
  );
}

export default Intro;
