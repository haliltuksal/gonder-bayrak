"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useFlowbiteCarousel = () => {
    useEffect(() => {
        const load = async () => {
            if (typeof window !== "undefined") {
                const { initCarousels } = await import("flowbite");
                if (typeof initCarousels === "function") {
                    initCarousels();
                }
            }
        };

        load();
    }, []);
};

export default function PremiumCarousel() {
    useFlowbiteCarousel();

    const images = [
        "https://picsum.photos/1200/800?random=1",
        "https://picsum.photos/1200/800?random=2",
        "https://picsum.photos/1200/800?random=3",
        "https://picsum.photos/1200/800?random=4",
        "https://picsum.photos/1200/800?random=5",
    ];

    return (
        <div
            id="default-carousel"
            className="relative w-full mx-auto max-w-[75%] pb-7"
            data-carousel="slide"
        >
            <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className={
                            i === 0
                                ? "duration-700 ease-in-out relative w-full h-full"
                                : "hidden duration-700 ease-in-out relative w-full h-full"
                        }
                        data-carousel-item={i === 0 ? "active" : undefined}
                    >
                        <Image
                            src={src}
                            alt={`slide-${i}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        className="w-3 h-3 rounded-full bg-white/70 hover:bg-white"
                        aria-label={`Slide ${i + 1}`}
                        data-carousel-slide-to={i}
                    />
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                data-carousel-prev
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/40 backdrop-blur-md"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </Button>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                data-carousel-next
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/40 backdrop-blur-md"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </Button>
            </button>
        </div>
    );
}
