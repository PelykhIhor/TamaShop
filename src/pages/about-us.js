import Layout from '@/components/Layout';
import React from 'react';

export default function AboutUs() {
    return (
        <Layout>
            <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:bg-gray-900 text-white">
                <div className="py-12 px-6 mx-auto max-w-screen-xl lg:py-20 lg:px-8">
                    <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-20">
                        <h2 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white">Про TamaShop</h2>
                        <p className="text-lg font-medium text-gray-200">
                            TamaShop - ваш надійний партнер у світі техніки Apple з 2020 року.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 mb-12 lg:mb-20">
                        <div className="relative bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <a href="#">
                                <img className="w-full rounded-t-xl" src="https://i.postimg.cc/SjPs6GTV/wallpaperflare-com-wallpaper-2.jpg" alt="Член команди 1" />
                            </a>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    <a href="#">Ігор Євгенійович</a>
                                </h3>
                                <span className="block text-gray-500">Засновник інтернет-магазину</span>
                                <p className="mt-4 text-gray-600">Розробник інтернет-магазину</p>
                                <div className="flex space-x-4 mt-6">
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168Z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <a href="#">
                                <img className="w-full rounded-t-xl" src="https://i.postimg.cc/hhvvQYrf/wallpaperflare-com-wallpaper-1.jpg" alt="Член команди 2" />
                            </a>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    <a href="#">Яна Артемівна</a>
                                </h3>
                                <span className="block text-gray-500">Співзасновник інтернет-магазину</span>
                                <p className="mt-4 text-gray-600">Дизайнер❤️</p>
                                <div className="flex space-x-4 mt-6">
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591Z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168Z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-150">
                                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
