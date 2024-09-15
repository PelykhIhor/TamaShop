"use client";

import Navbar from './Navbar';
import Footer from './Footer';
import "../app/globals.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';



export default function Layout({ children }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const bannerClosedAt = localStorage.getItem("bannerClosedAt");
    const sixHours = 6 * 60 * 60 * 1000;

    if (!bannerClosedAt || Date.now() - new Date(bannerClosedAt).getTime() > sixHours) {
      setShowBanner(true);
    }
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem("bannerClosedAt", new Date().toISOString());
  };


  return (
    <main>
      <Navbar />
      {showBanner && (
        <div
          id="marketing-banner"
          tabIndex="-1"
          className="fixed z-50 flex flex-col justify-between w-[calc(100%-2rem)] p-6 bg-white border border-gray-100 rounded-2xl shadow-lg lg:max-w-7xl left-1/2 top-6 -translate-x-1/2 dark:bg-gray-800 dark:border-gray-700 md:flex-row" // Додаємо адаптивність для мобільних та десктопів
        >
          <div className="flex flex-col items-start mb-3 md:items-center md:flex-row md:mb-0"> {/* Верстка для мобільних та десктопів */}
            <a
              href="/"
              className="flex flex-col items-start mb-2 md:flex-row md:items-center md:me-4 md:mb-0"
            >
              <img
                src="https://i.postimg.cc/s1FXwWDD/logo-512.png"
                className="h-10 mb-3 md:me-3 transition-transform duration-500 hover:rotate-12" // Логотип адаптований для мобільних (центрований)
                alt="TamamoHub"
              />
              <span className="self-center text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                TamaShop
              </span>
            </a>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center md:ml-4"> {/* Текст для мобільних */}
              Примітки до випуску (Іформація для коледжу)
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-end space-y-3 md:space-y-0"> {/* Організуємо кнопки в колонку для мобільних */}
            <Link href="/release-notes">
              <button className="w-full px-5 py-2.5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-600">
                Детальніше
              </button>
            </Link>
            <button
              onClick={handleCloseBanner}
              type="button"
              className="flex-shrink-0 inline-flex justify-center ml-5 w-8 h-8 items-center text-gray-500 hover:text-gray-900 rounded-full bg-gray-200/50 p-2 transition duration-300 hover:bg-gray-300/50 dark:bg-gray-700 dark:hover:bg-gray-600 mt-3 md:mt-0" // Закриття банера
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      )}
      {children}
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js" strategy="lazyOnload" />
    </main>
  );
}
