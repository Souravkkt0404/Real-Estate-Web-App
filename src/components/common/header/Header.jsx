import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import img from "../../images/logo.png"

import { FaBars, FaTimes, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: 'About', current: false },
  { name: 'Services', href: 'Services', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Testimonials', href: 'Testimonial', current: false },
  { name: 'Awards', href: 'Award', current: false },
  { name: 'Contact Us', href: 'Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-slate-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-lime-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-between w-full sm:ml-6">
                <div className="flex-shrink-0 hidden sm:flex items-center">
                  <Link to="/"> <img
                    className="h-16 w-auto"
                    src={img}
                    alt="Your Company"
                  /></Link>
                </div>
                <div className="hidden sm:flex space-x-4">
                  {navigation.map((item) => (
                    <React.Fragment key={item.name}>
                      {item.name === 'Projects' ? (
                        <Menu as="div" className=" relative z-10">
                          {({ open }) => (
                            <>
                              <Menu.Button
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-black hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Menu.Button>

                              <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link to="/Ongoing"


                                          className={classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-black',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Ongoing Projects
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link
                                          to="/Newproject"
                                          className={classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-black',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          NEW Projects
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link
                                          to="/Upcoming"
                                          className={classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-black',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Upcoming Projects
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link
                                          to="/Resell"
                                          className={classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-black',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Resell and Residential
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      ) : (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-black hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )}
                    </React.Fragment>
                  ))}
                </div>


                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                  <a href="https://www.linkedin.com/in/ismail-sharief-b39309287/" target="_blank" rel="noopener noreferrer">   <FaFacebook size={24} /></a>
                  <a href="https://www.instagram.com/globalenterprises159/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> <FaYoutube size={24} /></a>
                  <a href="https://in.pinterest.com/gloooobalenterprises/" target="_blank" rel="noopener noreferrer"> <FaPinterest size={24} /></a>
                  <a href="https://twitter.com/GlobalEnte52531" target="_blank" rel="noopener noreferrer"> <FaTwitter size={24} /></a>
                  <a href="https://www.linkedin.com/in/ismail-sharief-b39309287/" target="_blank" rel="noopener noreferrer">  <FaLinkedinIn size={24} /></a>
                </div>
              </div>
            </div>
          </div>


          {/* Responsive panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-black hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}