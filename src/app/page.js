"use client"
import Image from 'next/image';
import Layout from "@/components/Layout";
import ProductCard from '../components/card';

export default function Home() {
    const products = [
        {
            image: 'https://i.postimg.cc/Bv014zTy/Applei-Mac27.jpg',
            image2: 'https://i.postimg.cc/Bv014zTy/Applei-Mac27.jpg',
            title: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
            price: '69999',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Apple iMac 27" - це потужний настільний комп`ютер, який поєднує в собі елегантний дизайн та високу продуктивність. Оснащений процесором M3 Max, цей iMac забезпечує блискавичну швидкість роботи та ефективну обробку даних. 27-дюймовий Retina 5K дисплей вражає своєю чіткістю та яскравістю кольорів, роблячи кожну деталь надзвичайно чіткою. Жорсткий диск об`ємом 1TB надає достатньо місця для зберігання всіх ваших файлів, фотографій та відео. Цей iMac ідеально підходить для професійних дизайнерів, відеомонтажерів та всіх, хто цінує якість та продуктивність.',
            additionalInfo: 'Наш магазин пропонує унікальну послугу розширеної гарантії всього за 500 грн на рік. Ця послуга включає повне налаштування вашого нового iMac, встановлення необхідного програмного забезпечення та регулярні перевірки для забезпечення оптимальної роботи пристрою. Ми гарантуємо професійну підтримку та швидке вирішення будь-яких технічних проблем, щоб ваш iMac завжди працював на найвищому рівні.'
    
        },
        {
            image: 'https://i.postimg.cc/hj4z7731/Applei-Phone15-Pro-Max.jpg',
            image2: 'https://i.postimg.cc/hj4z7731/Applei-Phone15-Pro-Max.jpg',
            title: 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium',
            price: '49999',
            rating: 5,
            discount: 'Up to 15% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price',
            description: 'iPhone 15 Pro Max - це флагманський смартфон від Apple, який встановлює нові стандарти в мобільних технологіях. Виконаний у стильному корпусі з Blue Titanium, цей пристрій не тільки виглядає преміально, але й забезпечує неперевершену міцність. З 256GB вбудованої пам`яті у вас буде достатньо місця для всіх ваших фотографій, відео та додатків. Потужний процесор забезпечує блискавичну швидкість роботи, а передова система камер дозволяє робити професійні знімки в будь-яких умовах. Яскравий OLED дисплей забезпечує неймовірну чіткість та живі кольори.',
            additionalInfo: 'Купуючи iPhone 15 Pro Max у нашому магазині, ви отримуєте можливість скористатися нашою спеціальною пропозицією - розширеною гарантією за 500 грн на рік. Ця послуга включає повне налаштування вашого нового iPhone, перенесення даних зі старого пристрою, встановлення захисного скла та регулярні перевірки для забезпечення оптимальної роботи. Наші експерти завжди готові допомогти вам з будь-якими питаннями чи проблемами, пов`язаними з вашим новим iPhone.'
        },
        {
            image: 'https://i.postimg.cc/Ls3gXVvs/i-Pad-Pro13.jpg',
            image2: 'https://i.postimg.cc/Ls3gXVvs/i-Pad-Pro13.jpg',
            title: 'iPad Pro 13-Inch (M4): XDR Display, 512GB',
            price: '33999',
            rating: 5,
            discount: 'Up to 35% off',
            delivery: 'Shipping Today',
            bestPrice: 'Best Price',
            description: 'iPad Pro 13-inch з процесором M4 - це потужний та універсальний планшет, який може замінити повноцінний комп`ютер. Оснащений передовим XDR дисплеєм, цей iPad забезпечує неймовірну якість зображення з високою яскравістю та контрастністю. 512GB вбудованої пам`яті надають достатньо місця для зберігання великої кількості файлів, додатків та медіаконтенту. Потужний процесор M4 забезпечує блискавичну швидкість роботи та можливість виконувати найскладніші завдання, від редагування відео до 3D-моделювання.',
            additionalInfo: 'Обираючи iPad Pro в нашому магазині, ви можете скористатися нашою спеціальною пропозицією - розширеною гарантією за 500 грн на рік. Ця послуга включає повне налаштування вашого нового iPad, встановлення необхідних додатків, налаштування iCloud та Apple ID, а також регулярні перевірки для забезпечення оптимальної роботи пристрою. Наші фахівці завжди готові надати вам професійну підтримку та допомогти максимально ефективно використовувати всі можливості вашого нового iPad Pro.'
        },
        {
            image: 'https://i.postimg.cc/m2KH6ktT/Play-Station5-Console.jpg',
            image2: 'https://i.postimg.cc/m2KH6ktT/Play-Station5-Console.jpg',
            title: 'PlayStation®5 Console – 1TB, PRO Controller',
            price: '20999',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'PlayStation®5 - це новітня ігрова консоль, яка відкриває нову еру в світі відеоігор. З потужним процесором та графічним чіпом, PS5 забезпечує неймовірну якість графіки та плавність геймплею. 1TB вбудованої па`яті дозволяє зберігати велику кількість ігор, а швидкий SSD-накопичувач забезпечує миттєве завантаження. PRO Controller, що входить до комплекту, надає точний контроль та занурює вас у світ гри завдяки тактильному зворотному зв`язку та адаптивним тригерам.',
            additionalInfo: 'При покупці PlayStation®5 в нашому магазині ви можете скористатися нашою унікальною послугою розширеної гарантії за 500 грн на рік. Ця послуга включає повне налаштування вашої нової консолі, встановлення останніх оновлень, налаштування облікового запису PlayStation Network та підключення до телевізора. Наші експерти також нададуть вам консультації щодо оптимальних налаштувань для максимальної продуктивності та якості зображення. Ми гарантуємо швидке вирішення будь-яких технічних проблем, щоб ви могли насолоджуватися безперебійним ігровим процесом.'
        },
        {
            image: 'https://i.postimg.cc/wT1NVLxW/Microsoft-Xbox-Series-X.jpg',
            image2: 'https://i.postimg.cc/wT1NVLxW/Microsoft-Xbox-Series-X.jpg',
            title: 'Microsoft Xbox Series X 1TB Gaming Console',
            price: '20999',
            rating: 4,
            discount: 'Up to 10% off',
            delivery: 'Best Seller',
            bestPrice: 'Best Price',
            description: 'Xbox Series X - це найпотужніша ігрова консоль від Microsoft, яка пропонує неперевершений ігровий досвід. З потужним процесором та передовою системою охолодження, ця консоль забезпечує стабільну роботу навіть при найвимогливіших іграх. 1TB швидкого SSD-накопичувача дозволяє зберігати велику бібліотеку ігор та забезпечує миттєве завантаження. Підтримка 4K-роздільної здатності та технології ray tracing створює вражаючі візуальні ефекти, а система Smart Delivery гарантує, що ви завжди граєте в найкращу версію гри.',
            additionalInfo: 'Купуючи Xbox Series X у нашому магазині, ви отримуєте можливість придбати розширену гарантію всього за 500 грн на рік. Ця послуга включає повне налаштування вашої нової консолі, створення облікового запису Xbox Live, підключення до домашньої мережі та телевізора, а також оптимізацію налаштувань для найкращої продуктивності. Наші фахівці завжди готові надати вам професійну підтримку та допомогти вирішити будь-які технічні питання, щоб ви могли повністю зосередитися на грі.'
        },
        {
            image: 'https://i.postimg.cc/6pRvsKvn/Apple-Mac-Book-PROLaptop.jpg',
            image2: 'https://i.postimg.cc/6pRvsKvn/Apple-Mac-Book-PROLaptop.jpg',
            title: 'Apple MacBook PRO Laptop with M2 chip',
            price: '108999',
            rating: 5,
            discount: 'Up to 5% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'MacBook Pro з чіпом M2 - це потужний та елегантний ноутбук, який поєднує в собі продуктивність професійного рівня та мобільність. Інноваційний чіп M2 забезпечує неймовірну швидкість роботи та енергоефективність, дозволяючи виконувати найскладніші завдання без затримок. Яскравий Retina дисплей з технологією True Tone забезпечує точну передачу кольорів та комфортний перегляд при будь-якому освітленні. Магічна клавіатура з підсвічуванням та великий трекпад Force Touch роблять роботу на MacBook Pro надзвичайно зручною.',
            additionalInfo: 'Придбавши MacBook Pro в нашому магазині, ви можете скористатися нашою спеціальною пропозицією - розширеною гарантією за 500 грн на рік. Ця послуга включає повне налаштування вашого нового MacBook, встановлення необхідного програмного забезпечення, налаштування iCloud та Apple ID, а також регулярні перевірки для забезпечення оптимальної роботи пристрою. Наші експерти завжди готові надати вам професійну підтримку та допомогти максимально ефективно використовувати всі можливості вашого нового MacBook Pro.'
        },
        {
            image: 'https://i.postimg.cc/05WmDcvM/Apple-Watch-SE.jpg',
            image2: 'https://i.postimg.cc/05WmDcvM/Apple-Watch-SE.jpg',
            title: 'Apple Watch SE [GPS 40mm], Smartwatch',
            price: '29999',
            rating: 4,
            discount: 'Up to 20% off',
            delivery: 'Fast Delivery',
            bestPrice: 'Best Price',
            description: 'Apple Watch SE - це стильний та функціональний смарт-годинник, який поєднує в собі елегантний дизайн та передові технології. З 40мм корпусом та вбудованим GPS-модулем, цей годинник ідеально підходить для відстеження ваших фізичних активностей та навігації. Яскравий Retina дисплей забезпечує чітке відображення інформації навіть при яскравому сонячному світлі. Apple Watch SE дозволяє відстежувати ваш пульс, аналізувати якість сну, отримувати сповіщення з вашого iPhone та навіть здійснювати безконтактні платежі через Apple Pay.',
            additionalInfo: 'При покупці Apple Watch SE в нашому магазині ви можете скористатися нашою унікальною послугою розширеної гарантії за 500 грн на рік. Ця послуга включає повне налаштування вашого нового смарт-годинника, синхронізацію з iPhone, налаштування повідомлень та фітнес-цілей, а також навчання використанню основних функцій. Наші фахівці завжди готові надати вам професійну підтримку та допомогти максимально ефективно використовувати всі можливості вашого нового Apple Watch SE, щоб він став невід`ємною частиною вашого активного способу життя.'
        },
    ];
    
    return (
        <Layout>
            <section className="bg-gray-50 py-8 antialiased rounded-3xl m-5 dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="text-center mb-8">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ласкаво просимо до TamaShop</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            Ваш надійний партнер у світі техніки Apple з 2020 року
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Що ми робимо?</h2>
                                <p className="text-gray-600 dark:text-gray-300">Продаємо найновішу техніку Apple та надаємо експертні консультації</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Де нас знайти?</h2>
                                <p className="text-gray-600 dark:text-gray-300">м. Сміла, вул. Незалежності, 80</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow dark:bg-gray-800">
                                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Чому ми?</h2>
                                <p className="text-gray-600 dark:text-gray-300">Офіційна гарантія, швидка доставка, професійна підтримка</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product, index) => (
                            <ProductCard 
                                key={index} 
                                {...product} 
                                description={product.description}
                                additionalInfo={product.additionalInfo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
