import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


export default function Contact() {

    const handleSubmit = (e) => {
        alert(`Успішно надіслано`);
    };
    return (
        <Layout>
            <section className="bg-white rounded-3xl shadow dark:bg-gray-900 m-5">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-white dark:bg-gray-900 p-6 m-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                        <iframe 
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325.69294808648624!2d31.861373148442325!3d49.2281823620988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1417fbe4b390b%3A0x55d5cbce6e5a15f6!2z0JDQv9GC0LXQutCwIMKr0JHQsNC20LDRlNC80L4g0LfQtNC-0YDQvtCyJ9GPwrs!5e0!3m2!1suk!2sua!4v1726503150404!5m2!1suk!2sua"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>




                    {/* Contact Info Section */}
                    <div className="bg-white dark:bg-gray-900 p-6 m-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Інформація</h2>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="font-light text-gray-700 dark:text-gray-300">
                                <strong className="text-gray-900 dark:text-white">Address:</strong> м. Сміла, вул. Незалежності, 80
                            </p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="font-light text-gray-700 dark:text-gray-300">
                                <strong className="text-gray-900 dark:text-white">Email:</strong> support@tamashop.com
                            </p>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="font-light text-gray-700 dark:text-gray-300">
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
