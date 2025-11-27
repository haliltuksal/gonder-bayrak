"use client";

import React, { useState } from "react";

/*
const logos = [
    { id: 1, src: "/logos/cucen.png", alt: "Samsung" },
];
*/
const logos = [
    { id: 1, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 2, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 3, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 4, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 5, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 6, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 7, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 8, src: "https://dummyimage.com/150x50/cccccc/000000&text=LOGO", alt: "Samsung" },
    { id: 9, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 10, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
    { id: 11, src: "https://placehold.co/150x50?text=LOGO&font=roboto", alt: "Samsung" },
];


export default function ReferenceCarousel() {
    const [startIndex, setStartIndex] = useState(0);

    const itemsPerSlide = 5;
    const total = logos.length;

    const next = () => {
        setStartIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 1 + total) % total);
    };

    const visibleItems = Array.from({ length: itemsPerSlide }).map((_, i) => {
        return logos[(startIndex + i) % total];
    });

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Başlık */}
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
                    REFERANSLAR
                </h2>

                <div className="flex items-center justify-between">

                    {/* Sol ok */}
                    <button
                        onClick={prev}
                        className="text-3xl text-gray-700 hover:text-gray-900 px-3"
                    >
                        ‹
                    </button>

                    {/* Logo Alanı */}
                    <div className="flex-grow flex justify-center gap-10">
                        {visibleItems.map((logo) => (
                            <div key={logo.id} className="flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-10 opacity-60 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Sağ ok */}
                    <button
                        onClick={next}
                        className="text-3xl text-gray-700 hover:text-gray-900 px-3"
                    >
                        ›
                    </button>
                </div>

            </div>
        </section>
    );
}
