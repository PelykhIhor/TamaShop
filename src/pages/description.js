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
                            {/* ... (rest of the existing code) ... */}

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
}import React, { useEffect, useState } from 'react';
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
                            {/* ... (rest of the existing code) ... */}

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
