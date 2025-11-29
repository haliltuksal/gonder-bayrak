"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "DTG ve DTF Baskı Teknolojileri: Nasıl Yapılır ve Farkları Nelerdir?",
        excerpt:
            "Tekstil dünyasında kişiye özel baskılar giderek daha fazla talep görüyor. DTG ve DTF, son yılların en popüler dijital baskı yöntemleri arasında yer alıyor. Peki bu iki teknoloji nasıl uygulanır, hangi aşamalardan geçer ve birbirinden hangi yönleriyle ayrılır?",
        image: "https://placehold.co/900x600/png?text=DTG+%2F+DTF",
        link: "#",
    },
    {
        id: 2,
        title: "Mağaza Tasarımında Renk ve Işık Uyumu",
        excerpt:
            "Perakende alanlarında ışık ve renk uyumu, kullanıcı deneyimini doğrudan etkiler. Doğru ışıklandırma ve renk seçimi, müşterilerin mağazada daha uzun süre kalmasını sağlar.",
        image: "https://picsum.photos/900/600",
        link: "#",
    },
];

const AUTO_SLIDE_INTERVAL = 8000;

export default function BlogCarouselPremium() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % blogPosts.length);
    const prev = () => setCurrent((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

    useEffect(() => {
        const timer = setInterval(next, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    const post = blogPosts[current];

    return (
        <section className="w-full bg-[#f7f9fc] py-8 lg:py-16">
            <div className="mx-auto max-w-[75%] px-4">

                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-10">
                    İLHAM VERİCİ BLOG İÇERİKLERİ
                </h2>

                <div className="relative flex items-center">

                    <button
                        onClick={prev}
                        className="absolute -left-2 md:-left-4 lg:-left-8 z-20 h-8 w-8 md:h-10 md:w-10 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100"
                    >
                        ‹
                    </button>

                    <div className="w-full grid md:grid-cols-2 gap-4 lg:gap-6 items-center">

                        <div className="relative rounded-xl lg:rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={900}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <Card className="relative md:-ml-10 lg:-ml-20 bg-white p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-3xl shadow-xl border">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">{post.title}</h3>

                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6 line-clamp-3 md:line-clamp-5">
                                {post.excerpt}
                            </p>

                            <Button asChild size="sm" className="md:size-default">
                                <Link href={post.link} className="flex items-center gap-2">
                                    Yazıyı Oku →
                                </Link>
                            </Button>
                        </Card>
                    </div>

                    <button
                        onClick={next}
                        className="absolute -right-2 md:-right-4 lg:-right-8 z-20 h-8 w-8 md:h-10 md:w-10 rounded-full border bg-white shadow flex items-center justify-center hover:bg-gray-100"
                    >
                        ›
                    </button>

                </div>

                {/* Slider Bullet'ları */}
                <div className="mt-8 flex justify-center gap-2">
                    {blogPosts.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all ${
                                current === i ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
