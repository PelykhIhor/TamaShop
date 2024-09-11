import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


export default function Contacts() {
    return (
        <Layout>
            <section className="bg-white rounded-3xl shadow dark:bg-gray-900 m-5">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-white dark:bg-gray-900 p-6 m-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Зворотній зв`язок</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            Виникла технічна проблема? Хочете надіслати відгук про магазин? Потрібна інформація про товар? Дайте нам знати.
                        </p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ваш email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light" placeholder="support@tamashop.com" required/>
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Тема</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light" placeholder="Опишіть вашу проблему чи питання" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ваше повідомлення</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Залиште ваш коментар чи питання..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                                Надіслати повідомлення
                            </button>
                        </form>
                    </div>


                    {/* Contact Info Section */}
                    <div className="bg-white dark:bg-gray-900 p-6 m-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Інформація</h2>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="font-light text-gray-700 dark:text-gray-300">
                                <strong className="text-gray-900 dark:text-white">Address:</strong> м. Сміла, вул. Незалежності, 80<br/>
                                <strong className="text-gray-900 dark:text-white">Email:</strong> support@tamashop.com<br/>
                                <strong className="text-gray-900 dark:text-white">Phone:</strong> +380931234567
                            </p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="font-light text-gray-700 dark:text-gray-300">
                                <strong className="text-gray-900 dark:text-white">Час роботи:</strong><br/>
                                Пон-Пят: 10:00 - 19:00<br/>
                                Суб-Нед: 10:00 - 16:00
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
