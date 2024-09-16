import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';

export default function AboutUS() {
    return (
        <Layout>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Про Нас</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            У TamaShop ми пропонуємо найкращу техніку Apple для вашого комфорту та продуктивності. 
                        </p>
                    </div>

                    {/* Відповіді на П'ять питань */}
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                        {/* Хто? */}
                        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Хто Ми?
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Ми TamaShop — експерти в технологіях Apple. Наша команда складається з професіоналів, що готові допомогти вам знайти найкраще рішення для будь-якої потреби.
                                </p>
                            </div>
                        </div>

                        {/* Що? */}
                        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Що Ми Робимо?
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Ми спеціалізуємось на продажу техніки Apple, надаючи клієнтам найсучасніші та надійні продукти, такі як iPhone, MacBook та інші аксесуари.
                                </p>
                            </div>
                        </div>

                        {/* Де? */}
                        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Де Нас Знайти?
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Ми знаходимося в Києві. Ви можете відвідати наш офіс або замовити онлайн доставку по всій Україні.
                                </p>
                            </div>
                        </div>

                        {/* Коли? */}
                        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Коли Ми Працюємо?
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Наші робочі години: з понеділка по п’ятницю з 9:00 до 18:00.
                                </p>
                            </div>
                        </div>

                        {/* Чому? */}
                        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Чому Обрати Нас?
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    Ми пропонуємо тільки оригінальні продукти Apple з гарантією якості. Наша команда готова допомогти вам з усіма питаннями, пов’язаними з вибором техніки.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Команда */}
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://i.postimg.cc/SjPs6GTV/wallpaperflare-com-wallpaper-2.jpg" alt="Член команди 1" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ігор Євгенійович
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Засновник інтернет-магазину</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Розробник інтернет-магазину</p>
                            </div>
                        </div>

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://i.postimg.cc/hhvvQYrf/wallpaperflare-com-wallpaper-1.jpg" alt="Член команди 2" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Яна Артемівна
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Співзасновник інтернет-магазину</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Дизайнер ❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
