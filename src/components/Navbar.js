"use client";
import React, { useState } from "react";
import Image from "next/image";

const navItems = [
    { name: "Головна", href: "/" },
    { name: "Про нас", href: "/about-us" },
    { name: "Контакти", href: "/contacts" },
    { name: "Відгуки", href: "/reviews" },
    { name: "Переваги", href: "/faq#benefits" },
    { name: "Оплата", href: "/faq#payment" },
    { name: "Доставка", href: "/faq#delivery" },
];

const logo = {
    href: "https://i.postimg.cc/s1FXwWDD/logo-512.png",
    href2: "/",
    title: "TamaShop",
};

const contactInfo = {
    shop: "Найкращий магазин сучасної техніки",
    address: "м. Сміла, вул. Незалежності, 80",
    phoneNumber: "+380931234567",
    openingHours: "10:00 - 19:00",
};

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <ContactBar />
            <MainNav isModalOpen={isModalOpen} toggleModal={toggleModal} />
        </>
    );
}

function ContactBar() {
    return (
        <nav className="flex flex-wrap px-5 py-3 bg-white border-gray-200 dark:bg-gray-900 m-5 rounded-xl shadow">
            {Object.entries(contactInfo).map(([key, value], index) => (
                <ContactItem key={index} label={key} value={value} />
            ))}
        </nav>
    );
}

function ContactItem({ label, value }) {
    return (
        <div className="flex-1 flex items-center justify-center min-w-[150px]"> {/* Додано min-width для адаптивності */}
            <a className="text-purple-700 hover:text-pink-600 flex items-center">
                <span className="mr-4">
                    {label === "phoneNumber" ? `Телефон: ${value}` : value}
                </span>
            </a>
        </div>
    );
}

function MainNav({ isModalOpen, toggleModal }) {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 m-5 rounded-3xl shadow ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <MobileToggle toggleModal={toggleModal} />
                <NavMenu isModalOpen={isModalOpen} />
            </div>
        </nav>
    );
}

function Logo() {
    return (
        <a href={logo.href2} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo.href} className="h-8" alt={logo.title} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {logo.title}
            </span>
        </a>
    );
}

function MobileToggle({ toggleModal }) {
    return (
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleModal} // Додаємо подію для відкриття меню
        >
            <span className="sr-only">Toggle navigation</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
    );
}

function NavMenu({ isModalOpen }) {
    return (
        <div className={`${isModalOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navItems.map((item, index) => (
                    <NavItem key={index} href={item.href} text={item.name} />
                ))}
            </ul>
        </div>
    );
}

function NavItem({ href, text }) {
    return (
        <li>
            <a
                href={href}
                className="block py-2 px-3 text-2xl rounded md:bg-transparent text-purple-700 hover:text-pink-600 md:p-0 dark:text-white md:dark:text-purple-500"
            >
                {text}
            </a>
        </li>
    );
    }
        
