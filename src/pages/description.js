import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Description() {
    const [product, setProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedProduct = localStorage.getItem('selectedProduct');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        }
    }, []);

    if (!product) return <p>Loading...</p>;

    const handleAddToCart = () => {
        localStorage.setItem('productData', JSON.stringify(product));
        router.push('/payment');
    };

    return (
        <Layout>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full dark:hidden" src={product.image} alt={product.title} />
                            <img className="w-full hidden dark:block" src={product.image2} alt={product.title} />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                {product.title}
                            </h1>
                            <button
                                    onClick={handleAddToCart}
                                    className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {product.description || "No description available."}
                            </p>

                            {product.additionalInfo && (
                                <p className="text-gray-500 dark:text-gray-400">
                                    {product.additionalInfo}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
