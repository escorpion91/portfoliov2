import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Juan Manuel
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full-stack dev
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        A passionate Next.js developer/Python and JavaScript coder. Very eager to build things,
        whether in web development (Next.js, React, Django and WordPress mainly),
        solving tasks with code (Mainly Python and JavaScript) or dealing with Databases, APIs, etc. I’m always opened to learning new things and
        take on new challenges. Currently learning ThreeJs and React Three
        Fiber.
      </p>
    </div>
  );
}

export default Intro;
