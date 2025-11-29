"use client"

import React, {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';

interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    quantity: number;
    images: string[];
}

interface ProductCarouselProps {
    products: Product[],
    title?: string
}

export default function ProductCarousel({products, title}: ProductCarouselProps) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState<Record<number, number>>({});

    const itemsPerPage = 4;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentProducts = products.slice(
        slideIndex * itemsPerPage,
        slideIndex * itemsPerPage + itemsPerPage
    );

    const handleNextSlide = () => setSlideIndex((prev) => (prev + 1) % totalPages);
    const handlePrevSlide = () => setSlideIndex((prev) => (prev - 1 + totalPages) % totalPages);

    const handleNextImage = (productId: number, totalImages: number) => {
        setImageIndex((prev) => ({
            ...prev,
            [productId]: ((prev[productId] || 0) + 1) % totalImages,
        }));
    };

    const handlePrevImage = (productId: number, totalImages: number) => {
        setImageIndex((prev) => ({
            ...prev,
            [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
        }));
    };

    return (
        <section className="bg-gray-50 py-8 dark:bg-gray-900">
            <div className="mx-auto max-w-[75%] px-4">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <a
                        href="#"
                        className="flex items-center font-medium text-gray-600 hover:underline dark:text-blue-500"
                    >
                        Tümünü Gör
                        <span className="ml-1">→</span>
                    </a>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {currentProducts.map((product) => {
                            const currentImage = imageIndex[product.id] || 0;
                            const hasMultiple = product.images.length > 1;

                            return (
                                <div
                                    key={product.id}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <div
                                        className="relative mb-4 aspect-square w-full overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
                                        <img
                                            src={product.images[currentImage]}
                                            alt={product.name}
                                            className="h-full w-full object-cover"
                                        />

                                        {hasMultiple && (
                                            <>
                                                <Button
                                                    variant="ghost"
                                                    size="icon-sm"
                                                    onClick={() => handlePrevImage(product.id, product.images.length)}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                                                >
                                                    ‹
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon-sm"
                                                    onClick={() => handleNextImage(product.id, product.images.length)}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                                                >
                                                    ›
                                                </Button>
                                                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                                                    {product.images.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`h-1.5 w-1.5 rounded-full ${
                                                                idx === currentImage
                                                                    ? 'bg-blue-600'
                                                                    : 'bg-gray-300 dark:bg-gray-600'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div>
                                        <a
                                            href="#"
                                            className="mb-2 block text-lg font-semibold text-gray-900 hover:underline dark:text-white"
                                        >
                                            {product.name}
                                        </a>

                                        <div className="mb-2 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-lg ${
                                                        i < product.rating
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300 dark:text-gray-600'
                                                    }`}
                                                >
                          ★
                        </span>
                                            ))}
                                            <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                        ({product.reviews})
                      </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-xl font-bold text-gray-900 dark:text-white">
                                                {product.price} TL
                                            </p>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                        Adet: {product.quantity}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handlePrevSlide}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <span className="text-2xl">‹</span>
                        </Button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSlideIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${
                                        idx === slideIndex
                                            ? 'w-8 bg-blue-600'
                                            : 'w-2 bg-gray-300 dark:bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleNextSlide}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <span className="text-2xl">›</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}