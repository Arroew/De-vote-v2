import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import PurpleHead from '../Ui/PurpleHead';

import Lottie from 'lottie-react';
import animationData from '../../assets/76038-contact-mail.json';

const style = {
  height: 500,
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8j5vaen', 'template_sq6satl', form.current, 'fK-McGPnLBW3CpfCi')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <>
      <h2 className="my-4 text-4xl tracking-tight font-extrabold text-center text-gray-200 dark:text-white">Contact <PurpleHead text={'US'} /> </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

      <div className='grid grid-cols-1 md:grid-cols-2'>

        <section className="bg-[#141420]  dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Your email</label>
                <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@.com" required />
              </div>

              <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">name</label>
                <input type="text" name="from_name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nm" required />
              </div>

              <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400">Your message</label>
                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a msg..."></textarea>
              </div>

              <input type="submit" value="Send" className="py-3 px-5 text-sm cursor-pointer font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />

            </form>
          </div>
        </section>

        <div className='flex items-center justify-center'>
          <Lottie animationData={animationData} style={style} />
        </div>

      </div>

    </>

  )
}

export default Contact


/*

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />

        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

*/