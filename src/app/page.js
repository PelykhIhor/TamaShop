"use client"
import Image from 'next/image';


import Layout from "@/components/Layout";
import ProductCard from '../components/card';

export default function Home() {

    const products = [
        {
            image: 'https://i.postimg.cc/Bv014zTy/Applei-Mac27.jpg',
            image2: 'https://i.postimg.cc/Bv014zTy/Applei-Mac27.jpg',
            title: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
            price: '1,699',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
    
        },
        {
            image: 'https://i.postimg.cc/hj4z7731/Applei-Phone15-Pro-Max.jpg',
            image2: 'https://i.postimg.cc/hj4z7731/Applei-Phone15-Pro-Max.jpg',
            title: 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium',
            price: '1,199',
            rating: 5,
            discount: 'Up to 15% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
        {
            image: 'https://i.postimg.cc/Ls3gXVvs/i-Pad-Pro13.jpg',
            image2: 'https://i.postimg.cc/Ls3gXVvs/i-Pad-Pro13.jpg',
            title: 'iPad Pro 13-Inch (M4): XDR Display, 512GB',
            price: '799',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Shipping Today',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
        {
            image: 'https://i.postimg.cc/m2KH6ktT/Play-Station5-Console.jpg',
            image2: 'https://i.postimg.cc/m2KH6ktT/Play-Station5-Console.jpg',
            title: 'PlayStation®5 Console – 1TB, PRO Controller',
            price: '499',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
        {
            image: 'https://i.postimg.cc/wT1NVLxW/Microsoft-Xbox-Series-X.jpg',
            image2: 'https://i.postimg.cc/wT1NVLxW/Microsoft-Xbox-Series-X.jpg',
            title: 'Microsoft Xbox Series X 1TB Gaming Console',
            price: '499',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
        {
            image: 'https://i.postimg.cc/6pRvsKvn/Apple-Mac-Book-PROLaptop.jpg',
            image2: 'https://i.postimg.cc/6pRvsKvn/Apple-Mac-Book-PROLaptop.jpg',
            title: 'Apple MacBook PRO Laptop with M2 chip',
            price: '2,599',
            rating: 5,
            discount: 'Up to 5% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
        {
            image: 'https://i.postimg.cc/05WmDcvM/Apple-Watch-SE.jpg',
            image2: 'https://i.postimg.cc/05WmDcvM/Apple-Watch-SE.jpg',
            title: 'Apple Watch SE [GPS 40mm], Smartwatch',
            price: '699',
            rating: 4,
            discount: 'Up to 20% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Introducing the iPhone 15 Pro Max in stunning Blue Titanium. This cutting-edge smartphone features a robust 256GB storage capacity, perfect for all your apps, photos, and videos. The Pro Max boasts an advanced camera system, allowing you to capture professional-quality photos and videos. With 5G capabilities and the powerful A17 Bionic chip, this iPhone delivers lightning-fast performance for all your mobile needs.',
            additionalInfo: 'Includes features like ProMotion technology, Ceramic Shield front cover, and MagSafe for wireless charging and accessories.'
        },
    ];
    
    return (
        <Layout>
            <section className="bg-gray-50 py-8 antialiased rounded-3xl m-5 dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product, index) => (
                            <ProductCard 
                                key={index} 
                                {...product} 
                                description={product.description}
                                additionalInfo={product.additionalInfo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
