import React from 'react';
import Image from 'next/image';



const footerLinks = [
    { name: "Головна", href: "/" },
    { name: "Про нас", href: "/about-us" },
    { name: "Контакти", href: "/contacts" },
    { name: "Відгуки", href: "/reviews" },
    { name: "Переваги", href: "/faq#benefits" },
    { name: "Оплата", href: "/faq#payment" },
    { name: "Доставка", href: "/faq#delivery" },
];

const logo = {
    src: "https://i.postimg.cc/s1FXwWDD/logo-512.png",
    alt: "TamaShop Logo",
    link: "/",
    title: "TamaShop",
};

export default function Footer() {
    return (
        <footer className="bg-white rounded-3xl shadow dark:bg-gray-900 m-5 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <LogoSection />
                    <FooterLinks />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <FooterCopyright />
            </div>
        </footer>
    );
}

function LogoSection() {
    return (
        <a href={logo.link} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo.src} className="h-8" alt={logo.alt} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {logo.title}
            </span>
        </a>
    );
}

function FooterLinks() {
    return (
        <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 text-purple-600">
            {footerLinks.map((item, index) => (
                <li key={index}>
                    <a href={item.href} className="hover:text-pink-600 me-4 md:me-6">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

function FooterCopyright() {
    return (
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} {logo.title}. All Rights Reserved.
        </span>
    );
}
