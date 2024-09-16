import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


const faqData = [
    {
        id: "benefits",
        question: "Наші переваги",
        answer: "Ми пропонуємо оригінальну техніку Apple з професійним налаштуванням та індивідуальним підходом. Кожен пристрій проходить ретельну перевірку нашими досвідченими фахівцями, щоб гарантувати його бездоганну роботу на найвищому рівні. Також ми берем на себе відповідальність виконати перше налаштування вашої нової техніки, допомагаючи вам швидко та легко почати користуватися всіма можливостями вашого пристрою Apple. Особлива перевага нашого магазину — унікальна послуга розширеної гарантії лише за 500 грн на рік. Ця гарантія включає повне налаштування всіх необхідних додатків, оптимізацію роботи пристрою та вирішення будь-яких проблем з прошивкою. З нами ваша техніка Apple завжди працюватиме як годинник, а ви отримаєте повну підтримку та супровід.",
    },
    {
        id: "payment",
        question: "Оплата",
        answer: "Ми зробили процес оплати максимально зручним та гнучким для наших клієнтів. Ви можете оплатити своє замовлення банківською карткою будь-якої країни або навіть криптовалютою, якщо віддаєте перевагу цьому сучасному способу розрахунку. Для тих, хто цінує традиційні методи, ми пропонуємо можливість оплати при отриманні: на касі відділення пошти, якщо ви замовили доставку, або безпосередньо на касі нашого магазину при купівлі товару на місці.",
    },
    {
        id: "delivery",
        question: "Доставка",
        answer: "Наша політика доставки розроблена з турботою про вас. Ми пропонуємо повністю безкоштовну доставку для всіх замовлень, незалежно від їх суми чи ваги. Термін доставки по Україні складає від 3 до 7 днів, а якщо ви знаходитесь за кордоном, ваше замовлення прибуде протягом 7-14 днів. Ми співпрацюємо з найнадійнішими службами доставки, такими як Meest, Nova Пошта та Укрпошта, щоб забезпечити швидке та безпечне отримання вашого замовлення.",
    },
];

export default function FAQ() {
    return (
        <Layout>
            <section className="bg-white dark:bg-gray-900 m-5 rounded-3xl shadow">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Часті запитання
                    </h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700 md:gap-16 md:grid-cols-1">
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} id={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

function FAQItem({ id, question, answer }) {
    return (
        <div id={id} className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <Icon />
                {question}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
                {answer.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
}

function Icon() {
    return (
        <svg
            className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
            />
        </svg>
    );
}
