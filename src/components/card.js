// components/card.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProductCard = ({ image, image2, title, price, rating, discount, delivery, bestPrice, description, additionalInfo }) => {
    const router = useRouter();

    const handleClick = () => {
        const productData = { 
            image, 
            image2, 
            title, 
            price, 
            rating, 
            discount, 
            delivery, 
            bestPrice,
            description,
            additionalInfo
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        router.push('/description');
    };

    const handleBuyClick = (e) => {
        e.stopPropagation(); // Prevent triggering the card click event
        const productData = { image, image2, title, price, rating, discount, delivery, bestPrice };
        localStorage.setItem('productData', JSON.stringify(productData));
        router.push('/payment');
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <div className="h-56 w-full cursor-pointer" onClick={handleClick}>
                <img className="rounded-lg mx-auto h-full dark:hidden" src={image} alt={title} />
                <img className="rounded-lg mx-auto hidden h-full dark:block" src={image2} alt={title} />
            </div>
            <div className="pt-6">
                {discount && (
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="me-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            {discount}
                        </span>
                    </div>
                )}
                <Link href="/description" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white" onClick={handleClick}>
                    {title}
                </Link>
                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{rating}.0</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({rating * 91})</p>
                </div>
                <ul className="mt-2 flex items-center gap-4">
                    {delivery && (
                        <li className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{delivery}</p>
                        </li>
                    )}
                    {bestPrice && (
                        <li className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{bestPrice}</p>
                        </li>
                    )}
                </ul>
                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">₴{price}</p>
                    <button onClick={handleClick} type="button" className="inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transform transition duration-500 hover:scale-105">
                        <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        Купити
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
