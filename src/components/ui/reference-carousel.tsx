"use client";

import React, { useState, useEffect } from "react";

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
    const [itemsPerSlide, setItemsPerSlide] = useState(5);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(3);
            } else {
                setItemsPerSlide(5);
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

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
        <section className="w-full bg-white py-6 lg:py-10">
            <div className="mx-auto max-w-[75%] px-4">

                <h2 className="text-center text-lg lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-10">
                    REFERANSLAR
                </h2>

                <div className="flex items-center justify-between gap-2 lg:gap-0">

                    <button
                        onClick={prev}
                        className="text-2xl lg:text-3xl text-gray-700 hover:text-gray-900 px-2 lg:px-3 flex-shrink-0"
                    >
                        ‹
                    </button>

                    <div className="flex-grow flex justify-center gap-4 md:gap-6 lg:gap-10">
                        {visibleItems.map((logo) => (
                            <div key={logo.id} className="flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 md:h-10 opacity-60 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="text-2xl lg:text-3xl text-gray-700 hover:text-gray-900 px-2 lg:px-3 flex-shrink-0"
                    >
                        ›
                    </button>
                </div>

            </div>
        </section>
    );
}
