import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


export default function AboutUS() {
    return (
        <Layout>
        <section class="bg-white rounded-3xl shadow dark:bg-gray-900 m-5 py-8">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h6 class="text-gray-400 text-base font-normal leading-relaxed">Про нас</h6>
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2 class="text-purple-500 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Ваш надійний магазин у світі техніки Apple
                            </h2>
                            <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Ми пропонуємо найвищий рівень обслуговування та оригінальну техніку Apple з індивідуальним підходом. Кожен пристрій ретельно перевіряється нашими експертами, щоб забезпечити його бездоганну роботу.
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex-col justify-center items-start gap-6 flex">
                        <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-black-600 dark:text-white-600 text-2xl font-bold font-manrope leading-9">Професійне налаштування</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Ми налаштовуємо ваш пристрій так, щоб ви могли насолоджуватися всіма його можливостями з першого дня.</p>
                            </div>
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-black-600 dark:text-white-600 text-2xl font-bold font-manrope leading-9">Унікальна гарантія</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Наша розширена гарантія забезпечить вам підтримку та оптимізацію протягом року за лише 500 грн.</p>
                            </div>
                        </div>
                        <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-black-600 dark:text-white-600 text-2xl font-bold font-manrope leading-9">Підтримка клієнтів</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Ми завжди поруч, щоб допомогти вам із будь-якими питаннями чи проблемами.</p>
                            </div>
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-black-600 dark:text-white-600 text-2xl font-bold font-manrope leading-9">Індивідуальний підхід</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Ми враховуємо всі ваші побажання та потреби, щоб забезпечити найкращий досвід користування технікою Apple.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
                <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl "
                        src="https://i.postimg.cc/J4S52R2N/freepik-export-20240916160324-MGHt.jpg" alt="about Us image" />
                </div>
            </div>
        </div>
    </div>
</section>

                                            

    
        </Layout>
    );
}
