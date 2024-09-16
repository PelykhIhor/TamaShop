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
        warranty: '0', // Default to 1 year
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
        alert(`Payment form submitted. Total price: $${totalPrice}`);
    };

    return (
        <Layout>
            <div className="bg-white dark:bg-gray-900 min-h-screen py-8 m-5 rounded-3xl shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product details section (unchanged) */}
                        <div className="w-full lg:w-1/2 transform transition duration-500 hover:scale-110">
                            {/* ... (existing product details code) ... */}
                        </div>
                        <div className="w-full lg:w-1/2 transform transition duration-500 hover:scale-110">
                            <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* ... (existing form fields) ... */}
                                    
                                    {/* New Warranty Selection Dropdown */}
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
                                                    {option.years} {option.years === '1' ? 'year' : 'years'} - {option.price} грн
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-purple-600 text-white dark:text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
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
