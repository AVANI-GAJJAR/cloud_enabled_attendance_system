"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../assets/images/logo.png'
import Link from 'next/link';
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Reports', href: '/reports'  , current: false },
  { name: 'Profile', href: '/profile', current: false },
  { name: 'Logout', href: '/logout', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  const [active, setActive] = useState(' ');
  console.log(active)
  useEffect(() => {
    let url = window.location.href
    const regexPattern = /\/([^\/]+)$/;
    const match = url.match(regexPattern);
    
    if (match) {
      const extractedProfile = match[1];
      const convertedProfile = extractedProfile.charAt(0).toUpperCase() + extractedProfile.slice(1);
      setActive(convertedProfile)
  
    }   
  });
  return (
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <link rel="icon" href={data.src} type="image/icon type" />
    <title>Attendace System</title>
    <Disclosure as="nav" className="fixed w-full bg-gray-200">
      
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center justify-center ">
                  <img
                    className="h-6 w-auto"
                    src={data.src}
                    alt="Your Company"
                  /> <Link href="/dashboard" className="text-[#4a4a4a] hover:text-[#4a4a4a] text-md px-2"> Attendance System</Link>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      item.name !== 'Logout'?
                     ( <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={`${active === item.name
                          ? " text-[#4a4a4a] font-bold "
                          : "text-[#4a4a4a]"} rounded-md px-3 py-2 text-sm hover:no-underline hover:text-black`}

                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>):(
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-[#4a4a4a]' : 'text-[#4a4a4a] border border-[#4a4a4a] hover:bg-[tomato] hover:border-[tomato] hover:text-white hover:no-underline',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      )
                    ))}
                  </div>
                </div>           
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
               
                  className={`${active === item.name
                    ? "ehea text-white"
                    : "text-white"} block rounded-md px-3 py-2 text-base font-medium `}

                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure><br></br>
  </div>

  
  )
}
