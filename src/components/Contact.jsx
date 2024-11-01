import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mt-10 mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/agdddqwb"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-white dark:bg-transparent border border-stone-900 dark:border-white rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-white dark:bg-transparent border border-stone-900 dark:border-white rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-white dark:bg-transparent border border-stone-900 dark:border-white rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-stone-900 dark:text-white border border-stone-900 dark:border-white bg-white dark:bg-transparent drop-shadow-md hover:stroke-white"
          >
            Say hi!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
