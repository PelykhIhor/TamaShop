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
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Часті запитання
            </h2>
          </div>
          <div className="accordion-group">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} id={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function AccordionItem({ id, question, answer }) {
  return (
    <div
      className="accordion-item border border-solid border-gray-300 rounded-xl mb-4 p-4 transition-all duration-500 bg-white dark:bg-gray-800 dark:border-gray-600"
      id={id}
    >
      <button
        className="accordion-toggle group w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 dark:text-white"
        aria-controls={`collapse-${id}`}
        aria-expanded="false"
      >
        <h5>{question}</h5>
        <span className="transition-transform duration-300 group-hover:rotate-90">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <div
        id={`collapse-${id}`}
        className="accordion-content mt-4 overflow-hidden max-h-0 transition-all duration-500"
      >
        <p className="text-gray-700 dark:text-gray-400">
          {answer.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
