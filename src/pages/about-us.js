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
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">В нашому інтернет-магазині TamaShop ви знайдете найсучаснішу техніку Apple, яка забезпечить вам високий рівень продуктивності та задоволення від використання.</p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://i.postimg.cc/SjPs6GTV/wallpaperflare-com-wallpaper-2.jpg" alt="Член команди 1" />
                </a>
                <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Ігор Євгенійович</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">Засновник інтернет-магазину</span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Тут короткий опис про людину</p>
                    <ul className="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://i.postimg.cc/hhvvQYrf/wallpaperflare-com-wallpaper-1.jpg" alt="Член команди 2" />
                </a>
                <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">Яна Артемівна</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">Співзасновник інтернет-магазину</span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Дизайнер❤️</p>
                    <ul className="flex space-x-4 sm:mt-0">
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
    
        </Layout>
    );
}
