import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

export default function Payment() {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expirationDate: '',
        cvc: '',
        phoneNumber: '',
        country: '',
        city: '',
        zipCode: '',
        warranty: '0', // Default to 0 years (no warranty)
    });

    const warrantyOptions = [
        { years: '0', price: 0 },
        { years: '1', price: 500 },
        { years: '2', price: 950 },
        { years: '3', price: 1400 },
        { years: '4', price: 1700 },
        { years: '5', price: 2100 },
        { years: '6', price: 2400 },
    ];

    useEffect(() => {
        const storedData = localStorage.getItem('productData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }

        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const savedData = JSON.parse(storedUserData);
            setFormData((prevData) => ({
                ...prevData,
                fullName: savedData.fullName || '',
                phoneNumber: savedData.phoneNumber || '',
                country: savedData.country || '',
                city: savedData.city || '',
                zipCode: savedData.zipCode || '',
            }));
        }
    }, []);

    useEffect(() => {
        const { fullName, phoneNumber, country, city, zipCode } = formData;
        if (fullName || phoneNumber || country || city || zipCode) {
            const userDataToSave = { fullName, phoneNumber, country, city, zipCode };
            localStorage.setItem('userData', JSON.stringify(userDataToSave));
        }
    }, [formData]);

    if (!data) return <p>Loading...</p>;

    const { image, image2, title, price, rating, discount } = data;

    const formatExpirationDate = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        setFormData((prev) => ({ ...prev, expirationDate: value }));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedWarranty = warrantyOptions.find(option => option.years === formData.warranty);
        const totalPrice = Number(price) + selectedWarranty.price;
        alert(`Payment form submitted. Total price: ₴${totalPrice}`);
    };

    return (
        <Layout>
            <div className="bg-white dark:bg-gray-900 min-h-screen py-8 m-5 rounded-3xl shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/2 transform transition duration-500 hover:scale-110">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="rounded-lg h-56 w-full">
                                        <a >
                                            <img className="rounded-lg mx-auto h-full dark:hidden" src={image} alt={title} />
                                            <img className="rounded-lg mx-auto hidden h-full dark:block" src={image2} alt={title} />
                                        </a>
                                    </div>
                                    <div className="mt-4">
                                        {discount && (
                                            <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                                                {discount}
                                            </span>
                                        )}
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, index) => (
                                                <svg key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="ml-2 text-gray-900 dark:text-white">{rating}.0 ({rating * 91})</span>
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white">₴{price}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 transform transition duration-500 hover:scale-110">
                            <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Full name*</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Card number*</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Expiration date*</label>
                                        <input
                                            type="text"
                                            id="expirationDate"
                                            value={formData.expirationDate}
                                            onChange={formatExpirationDate}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">CVC*</label>
                                        <input
                                            type="text"
                                            id="cvc"
                                            value={formData.cvc}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Phone Number*</label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Country*</label>
                                        <input
                                            type="text"
                                            id="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">City*</label>
                                        <input
                                            type="text"
                                            id="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">ZIP Code*</label>
                                        <input
                                            type="text"
                                            id="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="warranty" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                                            Select Warranty
                                        </label>
                                        <select
                                            id="warranty"
                                            value={formData.warranty}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            {warrantyOptions.map((option) => (
                                                <option key={option.years} value={option.years}>
                                                    {option.years === '0' ? 'No warranty' : `${option.years} ${option.years === '1' ? 'year' : 'years'}`} - {option.price} грн
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-purple-600 text-white dark:text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-800">
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
