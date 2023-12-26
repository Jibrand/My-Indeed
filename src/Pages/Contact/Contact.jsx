import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Contact = () => {
  return (
    <>
    <Header/>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br class="hidden lg:inline-block" />readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            className="w-full h-full"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative  shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact