"use client"
import Image from 'next/image';


import Layout from "@/components/Layout";
import ProductCard from '../components/card';

export default function Home() {

    const products = [
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
            title: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
            price: '1,699',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
            title: 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium',
            price: '1,199',
            rating: 5,
            discount: 'Up to 15% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg',
            title: 'iPad Pro 13-Inch (M4): XDR Display, 512GB',
            price: '799',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Shipping Today',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg',
            title: 'PlayStation®5 Console – 1TB, PRO Controller',
            price: '499',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg',
            title: 'Microsoft Xbox Series X 1TB Gaming Console',
            price: '499',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg',
            title: 'Apple MacBook PRO Laptop with M2 chip',
            price: '2,599',
            rating: 5,
            discount: 'Up to 5% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price'
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
            image2: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
            title: 'Apple Watch SE [GPS 40mm], Smartwatch',
            price: '699',
            rating: 4,
            discount: 'Up to 20% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price'
        },
    ];
    
    return (
        <Layout>
            <section className="bg-gray-50 py-8 antialiased rounded-3xl m-5 dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
