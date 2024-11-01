import React from 'react';
import { FaGithub } from 'react-icons/fa';

function PortfolioItem({ title, imgUrl, stack, link, link2 }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative border border-stone-900 dark:border-white rounded-md overflow-hidden transition-transform transform hover:scale-105"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      {/* GitHub icon link positioned at bottom-right */}
      <a
        href={link2}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-stone-900 dark:text-white transition-transform transform hover:scale-105"
      >
        <FaGithub size={24} />
      </a>
    </a>
  );
}

export default PortfolioItem;
