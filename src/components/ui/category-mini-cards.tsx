"use client";

import React from "react";

const categories = [
    { id: 1, title: "FUAR / ETKİNLİK ÜRÜNLERİ", icon: "🎪" },
    { id: 2, title: "RESTORAN / CAFE ÜRÜNLERİ", icon: "🍽️" },
    { id: 3, title: "EĞİTİM SEKTÖRÜ", icon: "🎓" },
    { id: 4, title: "SAĞLIK SEKTÖRÜ", icon: "🩺" },
    { id: 5, title: "EMLAK / GAYRİMENKUL ÜRÜNLERİ", icon: "🏢" },
    { id: 6, title: "MAĞAZA / MARKET ÜRÜNLERİ", icon: "🛒" },
];

const FeatureCategoryBar = () => {
    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto max-w-[75%] px-4">

                <h2 className="text-xl font-bold text-gray-900 mb-6">
                    SEKTÖRLERE GÖRE ÜRÜNLER
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <div className="text-4xl mb-3">
                                {item.icon}
                            </div>

                            <span className="font-semibold text-gray-800 text-sm">
                {item.title}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCategoryBar;
