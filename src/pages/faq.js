import Layout from '@/components/Layout';
import React from 'react';

const faqData = [
    {
        id: "benefits",
        question: "Наші переваги",
        answer: "Ми пропонуємо преміум техніку Apple з професійним налаштуванням та індивідуальним підходом. Кожен пристрій проходить ретельну перевірку нашими досвідченими фахівцями, щоб гарантувати його бездоганну роботу на найвищому рівні. Також ми берем на себе відповідальність виконати перше налаштування вашої нової техніки, допомагаючи вам швидко та легко почати користуватися всіма можливостями вашого пристрою Apple. Особлива перевага нашого магазину — унікальна послуга розширеної гарантії лише за 500 грн на рік. Ця гарантія включає повне налаштування всіх необхідних додатків, оптимізацію роботи пристрою та вирішення будь-яких проблем з прошивкою. З нами ваша техніка Apple завжди працюватиме як годинник, а ви отримаєте повну підтримку та супровід.",
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
            <section className="py-16 px-4 mx-auto max-w-7xl">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
                    Часті запитання
                </h2>
                <div className="space-y-8">
                    {faqData.map((faq) => (
                        <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

function FAQItem({ id, question, answer }) {
    return (
        <div id={id} className="p-4 border border-gray-300 rounded-lg shadow transition-all">
            <button className="flex justify-between w-full text-left">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{question}</h3>
                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12m-6-6v12" />
                </svg>
            </button>
            <div className="mt-2 text-gray-500 dark:text-gray-400">
                {answer.split('\n').map((line, index) => (
                    <p key={index} className="leading-relaxed">{line}</p>
                ))}
            </div>
        </div>
    );
}
