"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

export default function ProductPage() {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="max-w-md lg:max-w-lg mx-auto">
                        <div className="rounded-lg bg-white dark:bg-gray-900">
                            <Image
                                width={800}
                                height={600}
                                src={`https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-${
                                    activeImage === 1
                                        ? "front"
                                        : activeImage === 2
                                            ? "back"
                                            : activeImage === 3
                                                ? "components"
                                                : "side"
                                }.svg`}
                                alt="iMac"
                                className="w-full h-auto"
                            />
                        </div>

                        <ul className="grid grid-cols-4 gap-4 mt-8">
                            {[1, 2, 3, 4].map((num) => (
                                <li key={num}>
                                    <button
                                        className={`h-20 w-20 overflow-hidden border-2 rounded-lg p-2 cursor-pointer mx-auto ${
                                            activeImage === num
                                                ? "border-primary-500"
                                                : "border-gray-300"
                                        }`}
                                        onClick={() => setActiveImage(num)}
                                    >
                                        <Image
                                            width={120}
                                            height={120}
                                            src={`https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-${
                                                num === 1
                                                    ? "front"
                                                    : num === 2
                                                        ? "back"
                                                        : num === 3
                                                            ? "components"
                                                            : "side"
                                            }.svg`}
                                            alt="thumbnail"
                                            className="object-contain w-full h-full"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 md:mt-0">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              In stock
            </span>

                        <p className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM,
                            256GB SSD, Mac OS, Pink
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                />
                            ))}
                            <p className="text-sm text-gray-500 dark:text-gray-400">(5.0)</p>
                            <a className="text-sm text-gray-900 underline dark:text-white">
                                345 Reviews
                            </a>
                        </div>

                        <p className="text-primary-700 dark:text-primary-500 mt-4 text-sm font-medium">
                            Deliver to Bonnie Green - Sacramento 23647
                        </p>

                        <div className="flex items-center justify-between gap-4 mt-6 sm:mt-8">
                            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                $1,249.99
                            </p>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
                            <div className="sm:gap-4 sm:items-center sm:flex">
                                <button className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Add to favorites
                                </button>

                                <button className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center">
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        <hr className="mt-6 border-gray-200 sm:mt-8 dark:border-gray-700" />

                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 sm:mt-8 sm:gap-y-8">
                            <div>
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Colour
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {["Green", "Pink", "Silver", "Blue"].map((color) => (
                                        <label key={color} className="relative block">
                                            <input
                                                type="radio"
                                                name="colour"
                                                className="absolute appearance-none top-2 left-2 peer"
                                            />
                                            <div className="relative flex items-center justify-center px-2 py-1 text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-primary-900 dark:peer-checked:text-primary-300 dark:peer-checked:border-primary-600">
                                                <p className="text-sm font-medium">{color}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    SSD capacity
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {["256GB", "512GB", "1TB"].map((cap) => (
                                        <label key={cap} className="relative block">
                                            <input
                                                type="radio"
                                                name="capacity"
                                                className="absolute appearance-none top-2 left-2 peer"
                                            />
                                            <div className="relative flex items-center justify-center px-2 py-1 text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-primary-900 dark:peer-checked:text-primary-300 dark:peer-checked:border-primary-600">
                                                <p className="text-sm font-medium">{cap}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Pickup
                                </p>
                                <div className="flex flex-col gap-4 mt-2 sm:flex-row">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm text-gray-900 dark:text-white">
                      Shipping - $19 (Arrives Nov 17)
                    </span>
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm text-gray-900 dark:text-white">
                      Pickup from Flowbox - $9
                    </span>
                                    </label>

                                    <label className="flex items-center gap-2 opacity-50">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="w-4 h-4"
                                            disabled
                                        />
                                        <span className="text-sm text-gray-400 dark:text-gray-500">
                      Pickup from our store (Not available)
                    </span>
                                    </label>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Add extra warranty
                                </p>
                                <div className="flex flex-wrap items-center gap-4 mt-2">
                                    {["1 year - $39", "2 years - $69", "3 years - $991"].map(
                                        (w) => (
                                            <label key={w} className="flex items-center gap-2">
                                                <input type="radio" name="warranty" className="w-4 h-4" />
                                                <span className="text-sm text-gray-900 dark:text-gray-300">
                          {w}
                        </span>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
