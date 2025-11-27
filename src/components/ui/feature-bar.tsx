"use client";

import React, { useState } from "react";
import {
    FaTruck,
    FaCreditCard,
    FaUndo,
    FaBox,
    FaShieldAlt
} from "react-icons/fa";

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        id: 1,
        title: "1000 TL Üzeri Ücretsiz Kargo",
        description:
            "1000 TL üzeri alışverişlerinizde Türkiye'nin her iline ücretsiz kargo ile kapıda teslim ediyoruz.",
        icon: <FaTruck className="text-xl" />
    },
    {
        id: 2,
        title: "Kredi Kartına 6 Taksit",
        description:
            "Tüm kredi kartlarına 6 taksite varan taksit imkanı sağlıyoruz.",
        icon: <FaCreditCard className="text-xl" />
    },
    {
        id: 3,
        title: "İade Garantisi",
        description:
            "Tarafımızdan kaynaklı olan her sorunda koşulsuz iade garantisi veriyoruz.",
        icon: <FaUndo className="text-xl" />
    },
    {
        id: 4,
        title: "Zamanında Teslimat",
        description:
            "Ürünleri sitede belirtilen kargo tarihlerinde kargoya veriyor ve tarafınıza gönderiyoruz.",
        icon: <FaBox className="text-xl" />
    },
    {
        id: 5,
        title: "Güvenli Alışveriş",
        description:
            "Kişisel verilerinizi koruyor, ödemelerde 3D secure ile güvenli alışveriş yapmanızı sağlıyoruz.",
        icon: <FaShieldAlt className="text-xl" />
    }
];

export default function FeatureBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAll = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="w-full border-y py-4 bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4">

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    {features.map(item => (
                        <div key={item.id} className="w-full">

                            <button
                                onClick={toggleAll}
                                className="flex flex-col items-center gap-2 w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                            >
                                {item.icon}
                                <span className="font-medium">{item.title}</span>
                            </button>

                            <div
                                className={`transition-all overflow-hidden mt-2 ${
                                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
