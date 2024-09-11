import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';


const faqData = [
    {
        id: "benefits",
        question: "Наші переваги",
        answer: "Ми пропонуємо найкращі послуги та товари для наших клієнтів, забезпечуючи високу якість обслуговування.",
    },
    {
        id: "payment",
        question: "Оплата",
        answer: "Ви можете оплатити замовлення банківською картою, криптовалютою або при отриманні посилки на відділенні пошти.",
    },
    {
        id: "delivery",
        question: "Доставка",
        answer: `Доставка повністю безкоштовна для всіх замовлень.
        Термін доставки по Україні складає від 3 до 7 днів, а за кордон - від 7 до 14 днів. 
        Доставка здійснюється через Meest, Nova Пошта, Укрпошта.`,
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
